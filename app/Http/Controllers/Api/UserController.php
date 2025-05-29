<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;


class UserController extends Controller
{
    public function update(Request $request, $id)
    {
        $user = Users::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|nullable|string|max:255',
            'surname' => 'sometimes|nullable|string|max:255',
            'email' => 'sometimes|nullable|email|max:255|unique:users,email,' . $id . ',id_user',
            'password' => [
                'sometimes|nullable',
                // "confirmed",
                Password::min(8)
                    ->letters()
                    ->symbols()
            ],
            'photo' => 'sometimes|nullable|image|max:2048'
        ]);

        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('photos', 'public');
            $user->photo = $photoPath;
        }

        if ($request->filled('name')) {
            $user->name = $request->name;
        }
        if ($request->filled('surname')) {
            $user->surname = $request->surname;
        }
        if ($request->filled('email')) {
            $user->email = $request->email;
        }
        if ($request->filled('password')) {
            $user->password = bcrypt($request->password);
        }

        $user->save();

        return response()->json(['message' => 'Користувача оновлено', 'user' => $user]);
    }



    public function destroy(Request $request, $id)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        $user = Users::findOrFail($id);
        $user->delete();
        return response()->json(['message' => 'Користувача видалено']);
    }
}
