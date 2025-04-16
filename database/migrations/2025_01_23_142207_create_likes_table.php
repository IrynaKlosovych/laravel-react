<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('likes', function (Blueprint $table) {
            $table->unsignedBigInteger("id_user");
            $table->foreign("id_user")->references("id_user")->on('users');

            $table->unsignedBigInteger("id_post");
            $table->foreign("id_post")->references("id_post")->on('posts');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('likes');
    }
};
