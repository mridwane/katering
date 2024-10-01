# Proyek Laravel

Proyek ini adalah aplikasi katering yang dibangun menggunakan Laravel inertia(ReactJS). Ikuti langkah-langkah di bawah ini untuk menyiapkan lingkungan pengembangan Anda.

## Langkah 1: Kloning Repositori

Kloning repositori ini ke mesin lokal Anda:

```bash
git clone https://github.com/mridwane/katering.git
cd katering
```

## Langkah 2: Instalasi Dependensi

Setelah kloning, jalankan perintah berikut untuk menginstal dependensi menggunakan Composer dan NPM:

```bash
composer install
npm install
```

## Langkah 3: Konfigurasi Lingkungan

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Kemudian, buka file `.env` dan sesuaikan pengaturan basis data serta konfigurasi lainnya sesuai kebutuhan Anda.

## Langkah 4: Generate Kunci Aplikasi

Jalankan perintah berikut untuk menghasilkan kunci aplikasi:

```bash
php artisan key:generate
```

## Langkah 5: Migrasi Database

Lakukan migrasi database untuk membuat tabel yang diperlukan:

```bash
php artisan migrate
```

## Langkah 6: Jalankan Server

Sekarang, Anda dapat menjalankan server pengembangan lokal dengan perintah berikut:

```bash
php artisan serve
```

## Langkah 7: Mengelola Aset

Jika Anda menggunakan Laravel Mix untuk pengelolaan aset, jalankan perintah berikut untuk mengompilasi aset Anda:

```bash
npm run build
```

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
