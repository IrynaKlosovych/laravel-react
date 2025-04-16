<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

use App\Models\Users;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_register_and_receive_token()
    {
        $response = $this->postJson('/api/signup', [
            'email' => 'test@example.com',
            'password' => 'password_123',
            'password_confirmation' => 'password_123',
        ]);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'user' => ['email'],
                'token'
            ]);


        $this->assertDatabaseHas('users', [
            'email' => 'test@example.com',
        ]);

        $data = $response->json();

        $this->assertArrayNotHasKey('password', $data['user']);
    }

    public function test_user_can_login_and_receive_token()
    {

        $user = Users::create([
            'email' => 'test@example.com',
            'password' => bcrypt('password_123'),
        ]);


        $response = $this->postJson('/api/login', [
            'email' => 'test@example.com',
            'password' => 'password_123',
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'user' => ['email'],
                'token'
            ]);

        $data = $response->json();

        $this->assertArrayNotHasKey('password', $data['user']);
    }

    public function test_user_cannot_register_and_receive_token_if_email_exists()
    {

        $user = Users::create([
            'email' => 'test@example.com',
            'password' => bcrypt('password_123'),
        ]);


        $response = $this->postJson('/api/signup', [
            'email' => 'test@example.com',
            'password' => 'password_123',
            'password_confirmation' => 'password_123',
        ]);

        $response->assertStatus(422)
            ->assertJsonStructure([
                'errors' => ['email']
            ]);

        $data = $response->json();
        $this->assertEquals('The email has already been taken.', $data['errors']['email'][0]);
    }
}
