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
        Schema::create('posts', function (Blueprint $table) {
            $table->id("id_post");

            $table->unsignedBigInteger("id_user");
            $table->foreign("id_user")->references("id_user")->on('users');

            $table->unsignedBigInteger("id_page");
            $table->foreign("id_page")->references("id_page")->on('pages');

            $table->string("text", 200);
            $table->dateTime("create_date");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
