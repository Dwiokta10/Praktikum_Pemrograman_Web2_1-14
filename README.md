<div align="center">

# Praktikum 1-14 PEMROGRAMAN WEB 2 SEMESTER 4
|                |                    |
| -------------- | ------------------ |
|      _Nama_    | Dwi Okta Ramadhani |
|      _NIM_     |      312410056     |
|     _Kelas_    |      TI.24.A1      |
|  _Mata Kuliah_ | Pemrograman Web 2  |
| _Dosen Pengampu_ | Bapak Agung Nugroho, S.Kom., M.Kom. |


Proyek ini menghubungkan backend CodeIgniter 4 dengan frontend Vue.js untuk membuat aplikasi CRUD artikel. Ini adalah laporan praktikum Pemrograman Web 2 yang mendemonstrasikan integrasi antara framework PHP modern dengan framework JavaScript progresif.

</div>

---

Tujuan Praktikum

Pada praktikum ini, saya mempelajari:

* Konsep dasar framework
* Konsep MVC (Model View Controller)
* Cara membuat aplikasi sederhana menggunakan CodeIgniter 4


## Pertemuan 1 

1. Persiapan
   Sebelum memulai, saya melakukan konfigurasi pada XAMPP:
Mengaktifkan ekstensi PHP:

  * php-json
  * php-mysqlnd
  * php-xml
  * php-intl
Cara:

  * Buka XAMPP → Apache → Config → php.ini
  * Hilangkan tanda `;` pada ekstensi
  * Restart Apache

2. Instalasi CodeIgniter 4

Langkah instalasi:

1. Download CodeIgniter dari website resmi
2. Extract ke folder `htdocs/lab11_ci`
3. Rename folder menjadi `ci4`
4. Jalankan di browser:

3. Menjalankan CLI CodeIgniter

Masuk ke folder project:

```
xampp/htdocs/lab11_ci/ci4
```

Lalu jalankan:

```
php spark
```

Fungsi: untuk menjalankan perintah CLI CodeIgniter

4. Mengaktifkan Debugging

Langkah:

* Rename file `env` menjadi `.env`
* Ubah:

```
CI_ENVIRONMENT = development
```

5. Struktur Direktori

Struktur penting pada CodeIgniter:

* `app/` → tempat coding utama
* `public/` → file yang bisa diakses user
* `writable/` → untuk log & upload
* `vendor/` → library bawaan

Penjelasan:
Folder `app` adalah tempat utama membuat aplikasi.

6. Konsep MVC

Penjelasan:

**Model** → mengelola data
**View** → tampilan
**Controller** → penghubung

MVC memisahkan logic, tampilan, dan data agar rapi.

7. Routing

Edit file:

```
app/Config/Routes.php
```

Tambahkan:

```php
$routes->get('/about', 'Page::about');
$routes->get('/contact', 'Page::contact');
$routes->get('/faqs', 'Page::faqs');
```

Cek dengan:

```
php spark routes
```

8. Membuat Controller

File:

```
app/Controllers/Page.php
```

Isi:

```php
<?php

namespace App\Controllers;

class Page extends BaseController
{
    public function about()
    {
        echo "Ini halaman About";
    }

    public function contact()
    {
        echo "Ini halaman Contact";
    }

    public function faqs()
    {
        echo "Ini halaman FAQ";
    }
}

9. Auto Routing

Tambahkan method:

```php
public function tos()
{
    echo "Ini halaman Term of Service";
}
```

Akses:

```
http://localhost:8080/page/tos
```

10. Membuat View

File:

```
app/Views/about.php
```

Isi:

```php
<h1><?= $title; ?></h1>
<p><?= $content; ?></p>
```

Ubah controller:

```php
return view('about', [
    'title' => 'Halaman About',
    'content' => 'Ini isi halaman about'
]);
```
11. Membuat Template Layout

Buat:

```
app/Views/template/header.php
app/Views/template/footer.php
```

Gunakan di view:

```php
<?= $this->include('template/header'); ?>
<?= $this->include('template/footer'); ?>
```

Tambahkan CSS di folder:

```
public/style.css
```
<img width="1920" height="1128" alt="Cuplikan layar 2026-04-01 115619" src="https://github.com/user-attachments/assets/262982fa-a0f5-48e2-9309-138f7387cda7" />
<img width="1920" height="1128" alt="Cuplikan layar 2026-04-01 121242" src="https://github.com/user-attachments/assets/e0410369-0080-42e1-a86d-c21e5ab7c32c" />
<img width="1920" height="1128" alt="Cuplikan layar 2026-04-01 122718" src="https://github.com/user-attachments/assets/a53a3efc-ed41-4ebe-a33a-0e69bc911c69" />
<img width="1920" height="1128" alt="Cuplikan layar 2026-04-01 123319" src="https://github.com/user-attachments/assets/b6c19ad1-b647-4fac-8bca-16b1c8d38bf8" />
<img width="1920" height="1128" alt="Cuplikan layar 2026-04-01 123059" src="https://github.com/user-attachments/assets/0a076b1a-d0a0-4f10-9f10-15047a23da5d" />
<img width="1920" height="1128" alt="Cuplikan layar 2026-04-01 124344" src="https://github.com/user-attachments/assets/fbf9cb7b-76bc-4a57-bd24-7adb03cdcf3e" />
<img width="1920" height="1128" alt="Cuplikan layar 2026-04-01 130555" src="https://github.com/user-attachments/assets/d5b9f730-e157-4493-90bf-77dec4d05419" />
<img width="1920" height="1128" alt="Cuplikan layar 2026-04-01 131529" 
<img width="1170" height="629" alt="Cuplikan layar 2026-04-02 153704" src="https://github.com/user-attachments/assets/5d45d4e4-8eae-4201-8f37-81774c218ad1" />


## Pertemuan 2
1. Persiapan Awal

Langkah pertama yang saya lakukan:

* Menyalakan *Apache dan MySQL di XAMPP*
* Membuka *phpMyAdmin*

Kenapa ini penting?
Karena tanpa database aktif, aplikasi tidak bisa menyimpan data.

---

2. Membuat Database dan Tabel

Saya membuat database:

sql
CREATE DATABASE lab_ci4;


Kemudian membuat tabel artikel.

*Cara saya memahami bagian ini:*
Saya menganggap tabel ini seperti “tempat penyimpanan artikel”, jadi saya menentukan kolom yang dibutuhkan:

* id → penanda unik
* judul → judul artikel
* isi → isi konten
* slug → URL yang rapi
* status → status publish
* gambar → gambar artikel
---

3. Menghubungkan Database ke CodeIgniter

Selanjutnya saya konfigurasi file .env

Kenapa pakai .env?
Karena lebih aman dan fleksibel dibanding langsung di config.

*Alur berpikirnya:*

* CodeIgniter itu aplikasi
* Database itu tempat data
* Jadi harus ada “jembatan” → yaitu konfigurasi koneksi

---

4. Membuat Model (Penghubung ke Database)

Saya membuat ArtikelModel.

*Pemahaman saya:*
Model ini ibarat “perantara” antara aplikasi dan database.

Jadi:

* Controller *tidak langsung ke database*
* Tapi lewat Model

Kenapa begitu?
Supaya kode lebih rapi dan terstruktur (konsep MVC)

---

5. Membuat Controller (Pengatur Alur)

Saya membuat controller Artikel.

Di sini saya mulai memahami alur sebenarnya:

User buka halaman →
Controller menerima request →
Controller ambil data dari Model →
Controller kirim ke View

Controller adalah “otak” dari aplikasi

---

6. Menampilkan Data (READ)

Saat membuat method index():

Saya mengambil semua data:

php
$model->findAll();

7. Menambah Data (CREATE)

Saat membuat fitur tambah artikel:

*Alurnya saya pahami seperti ini:*

1. User isi form
2. Data dikirim ke controller
3. Controller kirim ke model
4. Model simpan ke database

8. Mengubah Data (UPDATE)

Saat edit artikel:

*Pemahaman saya:*

* Ambil data lama dari database
* Tampilkan di form
* User ubah
* Simpan kembali

9. Menghapus Data (DELETE)

Saat klik hapus:
*Alurnya:*

* Ambil ID artikel
* Kirim ke controller
* Controller perintahkan model untuk hapus

Ini proses paling sederhana tapi sangat penting dalam CRUD

---
10. Routing (Penghubung URL ke Controller)

Saya menambahkan routing untuk:

* Halaman artikel
* Detail artikel
* Admin

*Pemahaman saya:*
Routing itu seperti “penunjuk jalan”
Contoh:


/artikel → ke controller Artikel


---

11. Halaman Admin (Tempat CRUD)

Saya membuat halaman admin untuk:

* Lihat data
* Tambah
* Edit
* Hapus

*Kenapa dipisah dari user biasa?*
Karena:
User biasa hanya melihat
Admin yang mengelola data

---

12. Alur Lengkap Aplikasi

Ini bagian yang bikin dosen yakin kamu paham:

User membuka halaman
→ Request masuk ke *Controller*
→ Controller meminta data ke *Model*
→ Model mengambil data dari *Database*
→ Data dikirim kembali ke Controller
→ Controller kirim ke *View*
→ View menampilkan ke user

Jadi alurnya:
User → Controller → Model → Database → Controller → View → User
<img width="1507" height="707" alt="Cuplikan layar 2026-04-02 155041" src="https://github.com/user-attachments/assets/0aca9da6-c797-434a-bdc0-b2ab041ec855" />
<img width="1290" height="503" alt="Cuplikan layar 2026-04-02 155829" src="https://github.com/user-attachments/assets/1db0c38b-1344-499c-ba45-eb1c6123d96c" />
<img width="900" height="553" alt="Cuplikan layar 2026-04-02 160020" src="https://github.com/user-attachments/assets/3995eeef-9b6d-43d6-979b-2ffdf9c45758" />

## Pertemuan 3 

## Langkah-Langkah Praktikum

### 1. Persiapan

* Membuka project sebelumnya lab7_php_ci
* Menggunakan text editor (VSCode)
* Menjalankan server lokal

---

### 2. Membuat Layout Utama

Lokasi:


app/Views/layout/main.php


Penjelasan:

* Membuat template utama website
* Berisi:

  * Header
  * Navbar
  * Content (dinamis)
  * Sidebar
  * Footer

Bagian penting:


<?= $this->renderSection('content') ?>


Digunakan untuk menampilkan isi halaman yang berbeda-beda

### 3. Modifikasi View (Home)

File:


app/Views/home.php


Perubahan:


<?= $this->extend('layout/main') ?>

<?= $this->section('content') ?>

<h1><?= $title; ?></h1>
<p><?= $content; ?></p>

<?= $this->endSection() ?>


Penjelasan:

* extend() → menggunakan layout utama
* section() → isi konten halaman
---

### 4. Membuat View Cell

Folder:


app/Cells/


File:


ArtikelTerkini.php


Fungsi:

* Mengambil data artikel terbaru dari database
* Menampilkan 5 artikel terbaru

Kode penting:


$model->orderBy('created_at', 'DESC')->limit(5)->findAll();

---

### 5. Membuat Komponen View

Folder:


app/Views/components/


File:


artikel_terkini.php


Fungsi:

* Menampilkan daftar artikel dalam bentuk list

---

### 6. Menampilkan View Cell di Layout

File:


layout/main.php


Tambahkan:


<?= view_cell('App\\Cells\\ArtikelTerkini::render') ?>


Penjelasan:

* Memanggil komponen artikel terbaru
* Bisa digunakan berulang di halaman lain


### 1. Apa manfaat View Layout?

View Layout memudahkan pembuatan tampilan website karena:

* Template bisa digunakan berulang
* Kode lebih rapi dan terstruktur
* Memisahkan desain dan konten

---

### 2. Perbedaan View Cell dan View biasa

| View Biasa                    | View Cell                      |
| ----------------------------- | ------------------------------ |
| Digunakan untuk halaman utama | Digunakan untuk komponen kecil |
| Tidak reusable                | Bisa digunakan berulang        |
| Dipanggil langsung            | Dipanggil dengan view_cell() |

---

### 3. Menampilkan kategori tertentu

Contoh modifikasi:


$model->where('kategori', 'teknologi')
      ->orderBy('created_at', 'DESC')
      ->limit(5)
      ->findAll();


Penjelasan:

* Hanya menampilkan artikel dengan kategori tertentu

---

## Kesimpulan

Pada praktikum ini saya memahami bahwa:

* View Layout membuat tampilan lebih efisien
* View Cell membantu membuat komponen modular
* CodeIgniter 4 mendukung pengembangan aplikasi yang lebih terstruktur

<img width="1114" height="546" alt="Cuplikan layar 2026-04-02 161229" src="https://github.com/user-attachments/assets/8534d712-efde-48f1-9325-bf6918f6dddc" />
<img width="1066" height="527" alt="Cuplikan layar 2026-04-02 161250" src="https://github.com/user-attachments/assets/77121c8d-d63c-41b6-92d4-65492cc25431" />

## Pertemuan 4
Langkah-Langkah Praktikum

1. Membuat Database User

Query:

sql
CREATE TABLE user (
  id INT(11) auto_increment,
  username VARCHAR(200) NOT NULL,
  useremail VARCHAR(200),
  userpassword VARCHAR(200),
  PRIMARY KEY(id)
);


Penjelasan:

* Tabel ini digunakan untuk menyimpan data user
* Password disimpan dalam bentuk *hash (aman)*

---

2. Membuat Model User

Lokasi:

bash
app/Models/UserModel.php

Fungsi:

* Menghubungkan aplikasi dengan tabel user
* Mengelola data login

Bagian penting:

php
protected $allowedFields = ['username', 'useremail', 'userpassword'];

---

3. Membuat Controller User

Lokasi:

bash
app/Controllers/User.php

Method:

* index() → menampilkan data user
* login() → proses autentikasi
* logout() → keluar dari sistem

Proses login:

1. Ambil input email & password
2. Cek ke database
3. Verifikasi password (password_verify)
4. Simpan session jika berhasil

Contoh session:

php
'session' => [
    'logged_in' => TRUE
]

4. Membuat View Login

Lokasi:

bash
app/Views/user/login.php

Fungsi:

* Menampilkan form login
* Input email & password

Fitur:

* Menampilkan error (flashdata)
* Form validasi sederhana


---

5. Membuat Seeder (Data Dummy)

Command:

bash
php spark make:seeder UserSeeder
php spark db:seed UserSeeder


Fungsi:

* Menambahkan user otomatis ke database
* Mempermudah testing login

Data:

* Email: [admin@email.com](mailto:admin@email.com)
* Password: admin123
---

6. Membuat Auth Filter

Lokasi:

bash
app/Filters/Auth.php


Fungsi:

* Melindungi halaman admin
* Redirect ke login jika belum login

Logika:

php
if(! session()->get('logged_in')){
    return redirect()->to('/user/login');
}

---

7. Konfigurasi Filter

File:

bash
app/Config/Filters.php


Tambahkan:

php
'auth' => App\Filters\Auth::class

---

8. Uji Coba Login

URL:


http://localhost:8080/user/login


Hasil:

* Jika login berhasil → masuk ke halaman admin
* Jika gagal → muncul pesan error


9. Fungsi Logout

Tambahkan:

php
public function logout()
{
    session()->destroy();
    return redirect()->to('/user/login');
}


Fungsi:

* Menghapus session
* Kembali ke halaman login

## Landasan Teori

1. Authentication (Auth)

Authentication adalah proses untuk memastikan bahwa pengguna adalah *orang yang valid* sebelum mengakses sistem.

Contoh:

* Login menggunakan email & password

Tujuan:

* Mengamankan data
* Membatasi akses pengguna

---

2. Authorization

Authorization adalah proses menentukan *hak akses pengguna* setelah login.

Contoh:

* Admin bisa akses dashboard
* User biasa tidak bisa

---

3. Session Management

Session digunakan untuk menyimpan data sementara pengguna setelah login.

Fungsi:

* Menyimpan status login
* Menyimpan data user

Contoh:

php
session()->set([
    'logged_in' => TRUE
]);


---

4. Password Hashing

Password tidak disimpan dalam bentuk asli, tetapi diubah menjadi hash.

Fungsi:

* Mencegah pencurian password
* Meningkatkan keamanan

Digunakan:

* password_hash()
* password_verify()

---

5. Filter pada CodeIgniter 4

Filter adalah mekanisme untuk menyaring request sebelum atau sesudah controller dijalankan.

Jenis:

* Before Filter → sebelum akses halaman
* After Filter → setelah proses selesai

---

6. Keamanan Aplikasi Web

Dalam sistem login, keamanan sangat penting:

* Validasi input
* Hash password
* Session protection
* Filter akses

---

## Analisis

Dari praktikum ini dapat disimpulkan bahwa:

* Sistem login adalah bagian penting dalam aplikasi web
* Filter membantu membatasi akses pengguna
* Session digunakan untuk menjaga status login

---

## Kesimpulan

Dengan menggunakan CodeIgniter 4, pembuatan sistem login menjadi lebih mudah dan terstruktur. Fitur seperti Model, Controller, Session, dan Filter sangat membantu dalam membangun sistem autentikasi yang aman dan efisien.
<img width="806" height="429" alt="Cuplikan layar 2026-04-02 161451" src="https://github.com/user-attachments/assets/e88fd529-1afb-410c-bffc-e8224599fff5" />




































## 📑 Daftar Isi Praktikum

1. [Praktikum 1: Pengenalan PHP Framework & Instalasi CodeIgniter 4](#-praktikum-1-pengenalan-php-framework--instalasi-codeigniter-4)
2. [Praktikum 2: Framework Lanjutan - Pembuatan CRUD Sederhana](#-praktikum-2-framework-lanjutan---pembuatan-crud-sederhana)
3. [Praktikum 3: Struktur Tampilan Menggunakan View Layout & View Cell](#-praktikum-3-struktur-tampilan-menggunakan-view-layout--view-cell)
4. [Praktikum 4: Implementasi Modul Login, Autentikasi, & Filter](#-praktikum-4-implementasi-modul-login-autentikasi--filter)
5. [Praktikum 5: Fitur Penomoran Halaman (Pagination) & Pencarian Data](#-praktikum-5-fitur-penomoran-halaman-pagination--pencarian-data)
6. [Praktikum 6: Relasi Antar Tabel (One-to-Many) & Query Builder](#-praktikum-6-relasi-antar-tabel-one-to-many--query-builder)
7. [Praktikum 7: Fitur Validasi Form & Unggah File Gambar Artikel](#-praktikum-7-fitur-validasi-form--unggah-file-gambar-artikel)
8. [Praktikum 8: Integrasi AJAX (Asynchronous JavaScript and XML)](#-praktikum-8-integrasi-ajax-asynchronous-javascript-and-xml)
9. [Praktikum 9: Implementasi AJAX Pagination & Live Search](#-praktikum-9-implementasi-ajax-pagination--live-search)
10. [Praktikum 10: Pembangunan RESTful API Backend dengan format JSON](#-praktikum-10-pembangunan-restful-api-backend-dengan-format-json)
11. [Praktikum 11: Implementasi RESTful API Client & Pengujian Endpoint](#-praktikum-11-implementasi-restful-api-client--pengujian-endpoint)
12. [Praktikum 12: Pengenalan Arsitektur Clean Code & Pengaturan Environment](#-praktikum-12-pengenalan-arsitektur-clean-code--pengaturan-environment)
13. [Praktikum 13: Implementasi Web Security & Penanganan SQL Injection](#-praktikum-13-implementasi-web-security--penanganan-sql-injection)
14. [Praktikum 14: Finalisasi Proyek Portal Berita & Deployment Hosting](#-praktikum-14-finalisasi-proyek-portal-berita--deployment-hosting)

---

## 📝 Detail Praktikum

### 1️⃣ Praktikum 1: Pengenalan PHP Framework & Instalasi CodeIgniter 4
* **Tujuan:** Memahami konsep dasar Framework, arsitektur *Model-View-Controller* (MVC), serta melakukan inisiasi awal project menggunakan CodeIgniter 4.
* **Langkah Kerja:**
  1. Membuka file konfigurasi PHP (`php.ini`) via XAMPP Control Panel untuk mengaktifkan ekstensi wajib: `php-json`, `php-mysqlnd`, `php-xml`, `php-intl`, dan `libcurl`.
  2. Mengunduh arsip CodeIgniter 4, mengekstraknya ke direktori kerja web server (`htdocs/lab11_php_ci`), dan mengubah strukturnya.
  3. Menjalankan perintah bawaan CLI Command Line Tool melalui terminal:
     ```bash
     php spark serve
     ```
  4. Menyalin file `.env` dan mengaktifkan mode debugging dengan mengubah parameter `CI_ENVIRONMENT` menjadi `development`.
* **Hasil Akhir:** Tampilan halaman bawaan (*Welcome Page*) CodeIgniter 4 berhasil dimuat dengan sempurna pada alamat port lokal `http://localhost:8080`.

### 2️⃣ Praktikum 2: Framework Lanjutan - Pembuatan CRUD Sederhana
* **Tujuan:** Memahami konsep dasar manipulasi database menggunakan entitas Model serta mengimplementasikan operasi dasar CRUD (*Create, Read, Update, Delete*).
* **Langkah Kerja:**
  1. Membuat database baru bernama `lab_ci4` dan menginisialisasi skema tabel `artikel`:
     ```sql
     CREATE TABLE artikel (
         id INT(11) AUTO_INCREMENT PRIMARY KEY,
         judul VARCHAR(200) NOT NULL,
         isi TEXT,
         gambar VARCHAR(200),
         status TINYINT(1) DEFAULT 0,
         slug VARCHAR(200)
     );
     ```
  2. Melakukan konfigurasi detail kredensial koneksi database MySQL pada file `.env` proyek.
  3. Membangun file Model data `ArtikelModel.php` di dalam direktori `app/Models` dengan mendaftarkan field-field yang diizinkan (`$allowedFields`).
  4. Menyusun metode pengolah data di Controller dan menyediakan formulir HTML untuk menambah, mengubah, serta menghapus data artikel.
* **Hasil Akhir:** Aplikasi dasar portal berita mampu menyimpan data langsung ke dalam tabel database MySQL.

### 3️⃣ Praktikum 3: Struktur Tampilan Menggunakan View Layout & View Cell
* **Tujuan:** Mengorganisasi struktur visual user-interface secara modular menggunakan fitur bawaan *View Layout* dan *View Cell* agar kode program lebih reusable.
* **Langkah Kerja:**
  1. Membuat struktur folder template tata letak utama pada direktori `app/Views/layout/main.php`.
  2. Menentukan wilayah penempatan dinamis konten halaman utama menggunakan potongan perintah:
     ```php
     <?= $this->renderSection('content') ?>
     ```
  3. Memasukkan pemanggilan komponen parsial header, navigasi menu, dan footer ke dalam template dasar.
  4. Membuat komponen dinamis *View Cell* untuk menampilkan widget "Artikel Terkini" secara independen di panel samping halaman web.
* **Hasil Akhir:** Seluruh halaman visual website (Halaman Utama, Tentang, Kontak) menggunakan cetakan layout master yang seragam dan rapi.

### 4️⃣ Praktikum 4: Implementasi Modul Login, Autentikasi, & Filter
* **Tujuan:** Memahami mekanisme sistem keamanan aplikasi melalui manajemen session autentikasi user dan penerapan pembatasan hak akses route (*Filter*).
* **Langkah Kerja:**
  1. Membuat tabel database baru bernama `user` untuk menampung rekaman data autentikasi user pengelola.
  2. Membangun berkas `UserModel.php` dan merancang Controller khusus proses pendaftaran serta verifikasi kata sandi masuk admin.
  3. Menyusun class Filter autentikasi khusus (`AuthFilter.php`) guna memvalidasi status hak akses aktif user sebelum masuk menu admin.
  4. Mendaftarkan filter tersebut ke dalam file konfigurasi routes utama (`app/Config/Filters.php`).
* **Hasil Akhir:** Halaman administrasi data kelola berita aman secara penuh dari akses ilegal non-admin. Jika diakses paksa, pengguna otomatis dialihkan ke halaman login.

### 5️⃣ Praktikum 5: Fitur Penomoran Halaman (Pagination) & Pencarian Data
* **Tujuan:** Mengimplementasikan teknik pembatasan baris data (*Pagination*) dan query penyaringan data (*Searching*) untuk mengoptimalkan pemuatan data dalam jumlah besar.
* **Langkah Kerja:**
  1. Mengubah struktur logika pemanggilan data model pada metode controller `admin_index()`:
     ```php
     $this->artikelModel->paginate(10);
     ```
  2. Merangkai link navigasi pagination halaman dinamis pada file view dengan kode bawaan engine:
     ```php
     <?= $pager->links() ?>
     ```
  3. Menambahkan klausa penyaringan query database `like()` berdasarkan parameter masukan string dari form pencarian admin.
* **Hasil Akhir:** Tampilan baris daftar data artikel pada panel admin terbagi rapi maksimal 10 rekaman per halaman dan dilengkapi form pencarian teks.

### 6️⃣ Praktikum 6: Relasi Antar Tabel (One-to-Many) & Query Builder
* **Tujuan:** Menerapkan relasi basis data antar tabel (*One-to-Many*) dan menyatukan data menggunakan query join via platform *Query Builder* CodeIgniter 4.
* **Langkah Kerja:**
  1. Membuat tabel master data pendukung bertajuk `kategori` dan menghubungkannya ke dalam struktur tabel `artikel` melalui kolom foreign key `id_kategori`.
  2. Menyusun string sintaks pengambilan data join relasi tabel menggunakan pustaka Query Builder:
     ```php
     $builder = $db->table('artikel');
     $builder->select('artikel.*, kategori.nama_kategori');
     $builder->join('kategori', 'kategori.id_kategori = artikel.id_kategori');
     ```
  3. Mengubah antarmuka form input tambah data artikel agar menyediakan pilihan dropdown dinamis yang bersumber dari tabel kategori.
* **Hasil Akhir:** Setiap entitas artikel berita yang diterbitkan memiliki status klasifikasi kategori yang jelas dan informatif.

### 7️⃣ Praktikum 7: Fitur Validasi Form & Unggah File Gambar Artikel
* **Tujuan:** Mengimplementasikan komponen pengaman data berupa aturan validasi input form dan melakukan manajemen berkas media (*File Upload*) gambar ke dalam direktori server.
* **Langkah Kerja:**
  1. Menambahkan atribut parameter forms wajib berupa properti `enctype="multipart/form-data"` pada komponen view.
  2. Menentukan skema aturan validasi berkas pada controller seperti tipe ekstensi media, batas ukuran berkas maks, serta pesan peringatan error.
  3. Memanfaatkan method pembantu eksekusi perpindahan lokasi penyimpanan berkas media fisik ke penyimpanan lokal:
     ```php
     $fileGambar->move(ROOTPATH . 'public/gambar');
     ```
* **Hasil Akhir:** Aplikasi mampu memvalidasi input teks dengan ketat serta berhasil menyimpan file unggahan gambar artikel ke folder tujuan.

### 8️⃣ Praktikum 8: Integrasi AJAX (Asynchronous JavaScript and XML)
* **Tujuan:** Memahami cara kerja pengiriman request asinkronus menggunakan AJAX untuk memuat data tanpa memicu proses muat ulang halaman (*Page Reload*) secara utuh.
* **Langkah Kerja:**
  1. Memasang link library pendukung framework frontend jQuery CDN pada baris cetakan layout utama.
  2. Membangun endpoint URL internal khusus pada pengelola data controller yang mengembalikan kembalian data berupa respons format objek JSON.
  3. Menyusun skrip JavaScript fungsi penangkap request asinkronus menggunakan perintah `$.ajax()` atau `$.getJSON()`.
* **Hasil Akhir:** Proses manipulasi pemuatan komponen data antarmuka terasa sangat responsif, dinamis, dan mempercepat pengalaman interaksi user.

### 9️⃣ Praktikum 9: Implementasi AJAX Pagination & Live Search
* **Tujuan:** Menggabungkan fungsi sistem navigasi halaman (Pagination) dan pencarian data agar berjalan secara asinkronus memanfaatkan AJAX.
* **Langkah Kerja:**
  1. Menyesuaikan metode penanganan request pada controller admin agar mampu memilah tipe request biasa atau bertipe request AJAX.
  2. Menangkap trigger event input pengetikan teks user pada kolom pencarian menggunakan perintah jQuery `.on('keyup')`.
  3. Mengirimkan parameter string pencarian tersebut ke backend secara langsung di latar belakang aplikasi dan memperbarui blok kontainer tabel HTML secara instan.
* **Hasil Akhir:** Fitur *Live Search* dan pemindahan halaman penomoran berjalan mulus tanpa interupsi kedipan penyegaran layar browser.

### 🔟 Praktikum 10: Pembangunan RESTful API Backend dengan format JSON
* **Tujuan:** Memahami arsitektur sistem integrasi antarmuka aplikasi modern menggunakan arsitektur RESTful API yang menghasilkan output data terstandardisasi format JSON.
* **Langkah Kerja:**
  1. Membuat controller API khusus dengan mewarisi kelas core bawaan CodeIgniter 4 yaitu `ResourceController`.
  2. Memanfaatkan library `ResponseTrait` untuk mempermudah penyusunan struktur status kode respons HTTP otomatis.
  3. Menyusun deretan fungsi standar endpoint API: `index()` (GET), `show()` (GET), `create()` (POST), `update()` (PUT), dan `delete()` (DELETE).
  4. Melakukan simulasi pengujian kualitas respons HTTP, format objek, dan fungsionalitas CRUD endpoint API menggunakan aplikasi REST Client Postman.
* **Hasil Akhir:** Backend sistem siap bertindak sebagai penyedia resource data (*REST Server*) yang dapat diintegrasikan dengan platform lain.

### 1️⃣1️⃣ Praktikum 11: Implementasi RESTful API Client & Pengujian Endpoint
* **Tujuan:** Mengimplementasikan peran aplikasi sebagai konsumen layanan (*REST Client*) yang melakukan konsumsi pertukaran data dari penyedia server luar.
* **Langkah Kerja:**
  1. Menginisialisasi pustaka HTTP Client bawaan CodeIgniter 4 (`Config\Services::curlrequest()`) pada sisi client proyek.
  2. Melakukan request eksternal menuju URL RESTful API yang telah dibangun pada modul sebelumnya.
  3. Melakukan parsing (dekode) data string mentah objek JSON menjadi bentuk format array asosiatif PHP agar bisa dirender pada interface views.
* **Hasil Akhir:** Modul integrasi antar platform eksternal berjalan lancar dengan respon data yang sinkron.

### 1️⃣2️⃣ Praktikum 12: Pengenalan Arsitektur Clean Code & Pengaturan Environment
* **Tujuan:** Memahami penataan pola arsitektur kode bersih (*Clean Code*), pemisahan logika bisnis yang ideal, serta manajemen rahasia kredensial sistem.
* **Langkah Kerja:**
  1. Melakukan refactoring terhadap struktur fungsi kode yang terlalu gemuk di dalam Controller untuk dipindahkan ke dalam lapisan *Service Layer*.
  2. Mengamankan seluruh variabel sensitif proyek seperti enkripsi enkoder, API Key, password database ke dalam file `.env`.
  3. Memastikan file `.env` telah terdaftar di dalam pengecualian file `.gitignore` repositori git.
* **Hasil Akhir:** Source code aplikasi menjadi jauh lebih terstruktur, mudah dibaca, aman, dan siap dikembangkan dalam tim skala besar.

### 1️⃣3️⃣ Praktikum 13: Implementasi Web Security & Penanganan SQL Injection
* **Tujuan:** Memperkuat keamanan sistem web dari potensi celah serangan siber berbahaya seperti *SQL Injection* dan *Cross-Site Scripting* (XSS).
* **Langkah Kerja:**
  1. Mengganti seluruh query database manual mentah menjadi fungsi Query Builder atau metode *Prepared Statements* bawaan Model Object.
  2. Menerapkan fitur proteksi token CSRF (*Cross-Site Request Forgery*) secara menyeluruh pada setiap form input kirim data portal.
  3. Menggunakan fungsi pembantu filter keamanan data masukan:
     ```php
     esc($userInputString)
     ```
* **Hasil Akhir:** Aplikasi portal berita tangguh dan aman dari injeksi script berbahaya yang dapat merusak database.

### 1️⃣4️⃣ Praktikum 14: Finalisasi Proyek Portal Berita & Deployment Hosting
* **Tujuan:** Melakukan optimasi final aplikasi portal berita secara menyeluruh dan melakukan proses perilisan web agar dapat diakses publik (*Deployment*).
* **Langkah Kerja:**
  1. Menghapus data simulasi sampah pengujian dan mengubah konfigurasi parameter `CI_ENVIRONMENT` dari `development` menjadi `production`.
  2. Melakukan kompresi aset gambar, script CSS, dan JavaScript agar ukuran loading web menjadi lebih ringan.
  3. Mengekspor database lokal ke dalam file format `.sql` dan mengunggahnya ke server database hosting online (cPanel/000webhost/Vercel).
  4. Menyesuaikan konfigurasi jalur URL utama server pada properti `app.baseURL`.
* **Hasil Akhir:** Aplikasi portal berita web resmi online penuh di jaringan internet dan siap diakses oleh masyarakat luas melalui tautan domain publik.

---

## 🚀 Fitur Utama

- **CRUD Artikel Lengkap**: Create, Read, Update, Delete artikel.
- **Backend CodeIgniter 4**: Framework PHP modern dan powerful.
- **Frontend Vue.js**: Framework JavaScript reaktif dan *component-based*.
- **RESTful API**: API endpoints yang terstruktur dengan baik.
- **Desain Responsif**: Tampilan yang menyesuaikan dengan berbagai ukuran layar.

## 📋 Prasyarat Sistem

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:

- **XAMPP** atau server lokal lainnya (Apache + MySQL)
- **PHP** versi 8.2 atau lebih tinggi
- **Composer** (untuk *dependency management* PHP)
- **Node.js** dan **npm** (untuk *development* Vue.js)

## 📁 Struktur Proyek

```text
lab7_php_ci/
├── app/                      # CI4 App (versi 1)
│   ├── Controllers/          # Controller aplikasi
│   ├── Models/               # Model database
│   ├── Views/                # View templates
│   └── Config/               # Konfigurasi aplikasi
├── ci4/                      # CI4 App (versi 2, dengan frontend Vue)
│   ├── app/                  # Application core
│   ├── public/               # Public assets
│   ├── system/               # CodeIgniter system files
│   ├── writable/             # Writable directories
│   └── frontend-vuejs/       # Frontend Vue.js
├── composer.json             # PHP dependencies
├── env                       # Template konfigurasi environment
└── spark                     # CLI tool
```
## 🛠️ Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/username/Laporan-Terakhir-Praktikum-Pemograman-Web-2-main.git
   cd Laporan-Terakhir-Praktikum-Pemograman-Web-2-main
   ```

2. **Install dependencies**
   ```bash
   composer install
   ```

3. **Konfigurasi environment**
   ```bash
   cp env .env
   ```
   Edit file `.env` dan sesuaikan konfigurasi database Anda.

4. **Setup database**
   - Buat database baru di MySQL/phpMyAdmin
   - Import file SQL jika tersedia
   - Konfigurasi koneksi database di `.env`

## 🚀 Menjalankan Aplikasi

### Backend (CodeIgniter 4)

Pastikan XAMPP sudah berjalan, lalu akses backend di:
```
http://localhost/lab7_php_ci/ci4/public
```

### Frontend (Vue.js)

Buka file `ci4/frontend VueJS/index.html` di browser atau jalankan development server:
```bash
cd ci4/frontend VueJS
npm install
npm run dev
```

## 📡 API Endpoints

| Method | Endpoint        | Deskripsi                  |
|--------|-----------------|---------------------------|
| GET    | /post           | Ambil semua artikel       |
| POST   | /post           | Tambah artikel baru       |
| PUT    | /post/:id       | Update artikel by ID      |
| DELETE | /post/:id       | Hapus artikel by ID       |

## 🛠️ Teknologi yang Digunakan

### Backend
- **PHP 8.2+** - Bahasa pemrograman server-side
- **CodeIgniter 4** - Framework PHP
- **MySQL** - Database management system

### Frontend
- **Vue.js 3** - Framework JavaScript
- **HTML5/CSS3** - Markup dan styling
- **JavaScript (ES6+)** - Logika frontend

## 🙏 Terima Kasih
