<div align="center">

# Laporan Praktikum Pemrograman Web 2
### Lab 7: Pengembangan Portal Berita dengan CodeIgniter 4 & Vue.js


| **Keterangan** | **Informasi** |
|:---------------|:--------------|
| 👤 **Nama** | Dwi Okta Ramadhani |
| 🆔 **NIM** | 312410056 |
| 🏫 **Kelas** | TI.24.1A |
| 📚 **Mata Kuliah** | Pemrograman Web 2 |
| 📝 **Praktikum 1-4** | https://github.com/Dwiokta10/lab11_ci-Pemrograman-Web-2 |

Selamat datang di repositori proyek Pemrograman Web 2! Repositori ini merupakan dokumentasi komprehensif dari proses pembelajaran dan pengembangan aplikasi web modern berbasis *Single Page Application* (SPA). 

Proyek ini berfokus pada pembangunan sistem *Content Management System* (CMS) sederhana untuk Portal Berita yang mengimplementasikan arsitektur *decoupled* (pemisahan sistem). Di sisi *backend*, **CodeIgniter 4** digunakan untuk membangun RESTful API yang tangguh dan aman dengan perlindungan *Token-Based Authentication*. Sementara di sisi *frontend*, **Vue.js 3** dimanfaatkan untuk menciptakan antarmuka pengguna yang reaktif dan asinkron dengan dukungan integrasi *AJAX* serta *Axios Interceptors*.

Melalui 14 tahap praktikum yang terangkum di bawah ini, proyek ini mendemonstrasikan praktik terbaik (*best practices*) dalam transisi dari pengembangan web monolitik konvensional menuju arsitektur modern yang skalabel.

</div>

---


> **Kredensial Login Admin:**
> *   **Email/Username:** `admin` atau `admin@email.com`
> *   **Password:** `admin123`

---

## 📑 Daftar Isi Praktikum

1. [Praktikum 1: Pengenalan PHP Framework & Instalasi CodeIgniter 4](#praktikum-1-php-framework-codeigniter)
2. [Praktikum 2: Framework Lanjutan - Pembuatan CRUD Sederhana](#praktikum-2-framework-lanjutan-crud)
3. [Praktikum 3: Struktur Tampilan Menggunakan View Layout & View Cell](#praktikum-3-view-layout-dan-view-cell)
4. [Praktikum 4: Implementasi Modul Login, Autentikasi, & Filter](#praktikum-4-framework-lanjutan-modul-login)
5. [Praktikum 5: Fitur Penomoran Halaman (Pagination) & Pencarian Data](#praktikum-5-pagination-dan-pencarian)
6. [Praktikum 6: Relasi Antar Tabel (One-to-Many) & Query Builder](#praktikum-6-relasi-tabel-dan-query-builder)
7. [Praktikum 7: Fitur Validasi Form & Unggah File Gambar Artikel](#praktikum-7-upload-file-gambar)
8. [Praktikum 8: Integrasi AJAX (Asynchronous JavaScript and XML)](#praktikum-8-ajax)
9. [Praktikum 9: Implementasi AJAX Pagination & Live Search](#praktikum-9-implementasi-ajax-pagination-dan-search)
10. [Praktikum 10: Pembangunan RESTful API Backend dengan format JSON](#praktikum-10-api-rest-api-codeigniter)
11. [Praktikum 11 & 12: Implementasi RESTful API Client & VueJS SPA](#praktikum-11--12-vuejs-spa)
13. [Praktikum 13: VueJS Autentikasi dan Navigation Guards](#praktikum-13-vuejs-autentikasi-dan-navigation-guards)
14. [Praktikum 14: Token Based Authentication & Axios Interceptors](#praktikum-14-token-based-authentication--axios-interceptors)

---


## Praktikum 1: PHP Framework (CodeIgniter)

### 1. Instalasi dan Konfigurasi CodeIgniter
CodeIgniter 4 diinstal menggunakan Composer. Environment dikonfigurasi melalui file `.env` dengan mengatur `CI_ENVIRONMENT = development` untuk mempermudah proses *debugging*.

### 2. Controller dan Routing
Membuat controller `Page` dengan beberapa method utama seperti `about`, `contact`, `faqs`, dan `tos`. Route dikonfigurasi secara manual di `app/Config/Routes.php` sekaligus mengaktifkan fitur *AutoRoute*.

### 3. Layout Web dengan CSS
Layout dasar dibangun menggunakan file `style.css` pada direktori `public`. Untuk mempermudah proses templating, layout dipisahkan menjadi komponen `header.php` dan `footer.php` di dalam folder `app/Views/template/`.

---

## Praktikum 2: Framework Lanjutan (CRUD)

### 1. Pembuatan Database
Database `lab_ci4` dan tabel `artikel` berhasil dibuat. *Anda dapat menggunakan file `database.sql` yang tersedia di repositori ini untuk mengimpor tabel beserta contoh datanya langsung ke MySQL.*

### 2. Model dan Menampilkan Data
`ArtikelModel` dibuat untuk menangani transaksi data. Method `index` pada controller `Artikel` digunakan untuk mengambil seluruh data dan menampilkannya pada view `artikel/index`. Terdapat juga method `view()` untuk menampilkan detail bacaan berdasarkan *slug*.

### 3. Menu Admin (CRUD)
Dibuat layout terpisah (`admin_header.php` dan `admin_footer.php`) khusus untuk panel admin. Fitur CRUD yang tersedia meliputi:
*   **Index:** Menampilkan daftar seluruh artikel.
*   **Add:** Formulir penambahan artikel baru.
*   **Edit:** Pembaruan data artikel yang sudah ada.
*   **Delete:** Penghapusan data artikel dari sistem.

---

## Praktikum 3: View Layout dan View Cell

### 1. Implementasi View Layout
Struktur template diperbarui menggunakan fitur **View Layout** bawaan CodeIgniter 4 (`extend()` dan `renderSection()`). Layout utama disentralisasi ke `app/Views/layout/main.php`, membuat view konten lainnya menjadi jauh lebih bersih dan terstruktur.

### 2. Integrasi View Cell (Artikel Terkini)
Membuat **View Cell** `ArtikelTerkini` untuk menyajikan 5 artikel terbaru di area sidebar. Fitur modular ini dipanggil langsung di layout sidebar. Struktur database juga telah diperbarui dengan kolom `created_at` untuk mendukung pengurutan waktu.

---

## Praktikum 4: Framework Lanjutan (Modul Login)

### 1. Auth Filter & Login System
Modul autentikasi dibangun menggunakan `UserModel` dan controller `User`. Sistem ini menerapkan keamanan standar PHP berupa *password hashing* (`password_verify`). 

Sebuah **Filter** `Auth` (`app/Filters/Auth.php`) diterapkan untuk melindungi rute `/admin/*`. Jika pengguna belum memiliki sesi aktif, mereka akan otomatis diarahkan kembali ke halaman login.

### 2. Database Seeder
Akun *dummy* admin di-generate menggunakan fitur *Seeder* (`app/Database/Seeds/UserSeeder.php`). Hal ini mempermudah setup awal saat deployment cukup dengan menjalankan perintah `php spark db:seed UserSeeder`.

---

## Praktikum 5: Pagination dan Pencarian

### 1. Pagination & Search di Admin Panel
Fitur *Pagination* diimplementasikan menggunakan fungsi `paginate()` dari *Query Builder*, membatasi tampilan menjadi 10 data per halaman. Fitur pencarian ditambahkan memanfaatkan method `like()` pada *Query Builder* untuk menyaring data berdasarkan kata kunci inputan admin.

---

## Praktikum 6: Relasi Tabel dan Query Builder

### 1. Kategori dan Relasi One-to-Many
Tabel `kategori` ditambahkan untuk mengklasifikasikan artikel. Tabel `artikel` diperbarui dengan menyematkan `id_kategori` sebagai *Foreign Key*. `KategoriModel` dibuat dan metode `join()` digunakan pada `ArtikelModel` untuk merelasikan kedua tabel tersebut.

### 2. Implementasi Relasi pada Aplikasi
Nama kategori kini tampil dinamis di halaman Publik maupun Admin. Saat membuat atau mengedit artikel, admin dapat memilih kategori melalui *dropdown* yang datanya ditarik langsung dari database.

---

## Praktikum 7: Upload File Gambar

### 1. Manajemen Upload Gambar
Menambahkan fitur unggah berkas pada form artikel sehingga admin dapat melampirkan *thumbnail*. Form View dilengkapi dengan atribut `enctype="multipart/form-data"`. Controller menangani file menggunakan `$this->request->getFile('gambar')`, memindahkannya ke direktori `public/gambar`, lalu menyimpan nama file tersebut ke database.

---

## Praktikum 8: AJAX

### 1. Manipulasi Data secara Asynchronous
Penerapan **AJAX** (via jQuery) memungkinkan pengambilan dan penghapusan data tanpa *reload* halaman. Di rute `/ajax`, script memanggil URL `/ajax/getData` (method `GET`) di latar belakang untuk merender data JSON ke dalam tabel. Fungsionalitas hapus memanggil URL `/ajax/delete/id` menggunakan method `DELETE`.

---

## Praktikum 9: Implementasi AJAX Pagination dan Search

### 1. Halaman Admin Dinamis (SPA Parsial)
Panel admin (`/admin/artikel`) direstrukturisasi dengan konsep *Single Page Application* parsial. Fungsionalitas *Pagination* dan *Pencarian* kini sepenuhnya digerakkan oleh AJAX jQuery. Controller `Artikel::admin_index` dimodifikasi untuk mendeteksi *request* AJAX dan merespons dengan format JSON (berisi data artikel dan *pager*).

---

## Praktikum 10: API (REST API CodeIgniter)

### 1. Pembuatan REST Controller
Sebuah REST API dibangun menggunakan kelas `ResourceController` bawaan CI4 untuk membuka akses data bagi aplikasi eksternal (seperti Vue.js). Endpoint `/post` mendukung operasi CRUD penuh:
*   `GET /post`: Mengambil semua artikel.
*   `GET /post/{id}`: Mengambil detail satu artikel.
*   `POST /post`: Menambahkan artikel baru (judul, isi).
*   `PUT /post/{id}`: Mengupdate artikel (via `x-www-form-urlencoded`).
*   `DELETE /post/{id}`: Menghapus artikel.

---

## Praktikum 11 & 12: VueJS SPA

Aplikasi *Frontend* mandiri dibangun menggunakan **VueJS 3** dan **Vue Router** pada repositori terpisah bernama `Lab11Web_VueJS`. Aplikasi *Single Page Application* (SPA) ini bertugas mengkonsumsi REST API dari backend CodeIgniter 4.

> Silakan merujuk ke folder `Lab11Web_VueJS` untuk melihat kode sumber dan dokumentasi spesifik terkait frontend.

---

## Praktikum 13: VueJS Autentikasi dan Navigation Guards

### 1. API Login Sisi Server & Client-Side Security
*   **Backend:** Endpoint `/api/login` ditambahkan untuk memvalidasi kredensial login dan menerbitkan Token beserta data *user* berformat JSON.
*   **Frontend:** Rute VueJS diamankan menggunakan *Navigation Guards* (`router.beforeEach`). Pengakses tanpa status autentikasi aktif akan diblokir dari halaman `/artikel` dan `/about`.

---

## Praktikum 14: Token Based Authentication & Axios Interceptors

### 1. Keamanan API Berbasis Token
*   **Server-Side (CI4):** Filter `ApiAuthFilter` memblokir akses modifikasi data (`POST`, `PUT`, `DELETE` di `/post`) jika *request* tidak membawa *header* `Authorization: Bearer <token>`. Akses ilegal akan dibalas dengan error `401 Unauthorized`.
*   **Client-Side (VueJS):** *Axios Interceptors* diimplementasikan pada `app.js` untuk secara otomatis menyematkan Token dari `localStorage` ke setiap *request* HTTP. Interceptor ini juga menangkap error `401` secara global dan otomatis mengarahkan pengguna kembali ke halaman login jika token telah kadaluarsa.


# Terima Kasih
