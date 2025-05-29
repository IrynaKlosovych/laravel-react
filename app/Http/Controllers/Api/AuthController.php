<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Controller;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;

use App\Models\Users;


class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => config('constants.MessageIncorrectEmailOrPass')
            ], 422);
        }
        /** @var Users $user */
        $user = Auth::user();
        $token = $user->createToken("main")->plainTextToken;

        return response(compact('user', 'token'));
    }


    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var Users $user */
        $user = Users::create([
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'), 201);
    }


    public function logout(Request $request)
    {
        /** @var Users $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
