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
        Schema::create('pages', function (Blueprint $table) {
            $table->id("id_page");

            $table->unsignedBigInteger("id_user");
            $table->foreign("id_user")->references("id_user")->on('users');

            $table->string("title", 200);
            $table->string("description", 200)->nullable();
            $table->dateTime("create_date");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
