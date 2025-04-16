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
        Schema::create('comments', function (Blueprint $table) {
            $table->id("id_comment");

            $table->unsignedBigInteger("id_user");
            $table->foreign("id_user")->references("id_user")->on('users');

            $table->unsignedBigInteger("id_post");
            $table->foreign("id_post")->references("id_post")->on('posts');

            $table->string("text", 200);
            $table->dateTime("create_date");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
