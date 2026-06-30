# Praktikum 1 - PHP Framework (CodeIgniter 4)

## Nama
- Nama : Fitri Ramadhani
- NIM : 312410085
- Kelas : I241A

## Tujuan Praktikum
Pada praktikum ini mempelajari dasar penggunaan Framework CodeIgniter 4, memahami konsep MVC (Model, View, Controller), routing, controller, view, serta membuat layout sederhana menggunakan CSS.

---

## Langkah-Langkah Praktikum

### php.ini
<img width="1366" height="720" alt="php ini" src="https://github.com/user-attachments/assets/895a4a18-a65a-4d5c-b209-9f793197013f" />

### Ekstensi PHP
<img width="1366" height="722" alt="image" src="https://github.com/user-attachments/assets/c017cea2-bd74-4ae1-b3da-137c7b0b2a29" />

### Tampilan cmd & perintah CLI

<img width="1365" height="707" alt="php spark" src="https://github.com/user-attachments/assets/5e354fe1-c1e4-4c42-9337-69d00a6ae581" />

### CI Error

<img width="1364" height="669" alt="whoops" src="https://github.com/user-attachments/assets/2751c423-f0c5-4503-afbc-3385dfe70265" />

### Konfigurasi CI

<img width="1015" height="514" alt="development" src="https://github.com/user-attachments/assets/388b74c0-6c80-4ffa-b084-80d24841a2fc" />

### Parse Error

<img width="1365" height="678" alt="parse error" src="https://github.com/user-attachments/assets/770fda35-66c9-4a2f-9ab6-3a776fed10fe" />

### Kode home

<img width="1366" height="720" alt="ubah di home titik koma" src="https://github.com/user-attachments/assets/63b7caa3-5978-486a-9750-e3c838b1596d" />

### Struktur direktori CI4

<img width="1350" height="711" alt="image" src="https://github.com/user-attachments/assets/a6590d36-191e-4296-a916-3769712ac3b2" />

### Tampilan CLI

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/941a53ea-a5c7-468e-82e9-e816a5a009cd" />

### Tampilan error page

<img width="1365" height="675" alt="php spark serve" src="https://github.com/user-attachments/assets/9c171407-368c-4b2a-a7bd-3cbcc922d48f" />

### Tampilan halaman about

<img width="1366" height="720" alt="about" src="https://github.com/user-attachments/assets/05217f44-cc87-4170-b0db-d1a931707367" />

### Tampilan autoroute

<img width="1366" height="720" alt="tos" src="https://github.com/user-attachments/assets/c0287ff1-92dd-45f8-9923-ce3a7508c43c" />

### Halaman about

<img width="1366" height="720" alt="abot" src="https://github.com/user-attachments/assets/dee19b99-6de5-4f79-93a1-2720bd7ab800" />

### Direktori asset

<img width="1350" height="711" alt="image" src="https://github.com/user-attachments/assets/f6ca3a5d-7404-4e3d-a9b3-3a3eb49fe79f" />

### Tampilan 
<img width="1366" height="720" alt="halaman abot lengkap" src="https://github.com/user-attachments/assets/88812a59-573e-4427-924e-e61432b1ca15" />

### 1. Instalasi CodeIgniter 4
Mengunduh CodeIgniter 4 dari website resmi kemudian mengekstraknya ke folder `htdocs/lab11_ci/ci4`.

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/2a13939a-a379-4af4-a244-13f83770c190" />



---

### 2. Menjalankan CodeIgniter
Menjalankan server menggunakan perintah:

```bash
php spark serve
```

Kemudian membuka browser pada alamat:

```
http://localhost:8080
```

<img width="1366" height="683" alt="ci4" src="https://github.com/user-attachments/assets/78446b8a-7c2c-4c11-a2c5-6cf105933ae9" />


---

### 3. Mengaktifkan Debug Mode

<img width="1350" height="711" alt="image" src="https://github.com/user-attachments/assets/1fc82fb0-5c95-4277-890a-f56d1cbb2358" />

Mengubah file `.env` dan mengubah:

```
CI_ENVIRONMENT = development
```

<img width="1015" height="514" alt="development" src="https://github.com/user-attachments/assets/4a1ed85c-c18f-405d-9f21-73906c11f2e2" />

---

### 4. Membuat Routing
Menambahkan routing pada file `app/Config/Routes.php`.

```php
$routes->get('/about', 'Page::about');
$routes->get('/contact', 'Page::contact');
$routes->get('/faqs', 'Page::faqs');
```

<img width="1366" height="720" alt="php spark routes" src="https://github.com/user-attachments/assets/1fceb97a-1284-44f5-bee2-11200f062a94" />

---

### 5. Membuat Controller
Membuat file `Page.php` pada folder `app/Controllers`.

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/6fe8586b-00a6-4539-9065-04c134c2102a" />

---

### 6. Membuat View
Membuat file `about.php` pada folder `app/Views`.

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/f6d5f534-1039-4ea1-976f-51cdcb43e396" />

---

### 7. Membuat Layout
Membuat folder `template` yang berisi `header.php` dan `footer.php`, kemudian menghubungkannya dengan `about.php`.

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/2e0f0459-b2bf-4524-9dfa-9858df52f5ad" />

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/847ae3f9-f75c-4fa3-927f-331d2817d768" />

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/344097a3-6aa0-4a53-a69b-a05bcce1116c" />

---

### 8. Hasil Akhir
Berhasil menampilkan halaman About menggunakan layout sederhana yang terdiri dari header, menu navigasi, sidebar, dan footer.

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/ed04661f-58ca-49a8-90e6-776f7eb9884f" />

---

## Kesimpulan

Pada praktikum ini berhasil mempelajari dasar penggunaan framework CodeIgniter 4, memahami konsep MVC, membuat routing, controller, view, serta menyusun layout web sederhana menggunakan template header dan footer.


# Praktikum 2 - Framework Lanjutan (CRUD) CodeIgniter 4

# Deskripsi Praktikum

Pada praktikum ini dilakukan pengembangan aplikasi Portal Berita menggunakan Framework **CodeIgniter 4** dengan menerapkan konsep **CRUD (Create, Read, Update, Delete)**. Selain itu dibuat Model, Controller, View, Routing, serta koneksi database MySQL sehingga aplikasi dapat mengelola data artikel secara dinamis.

---

# Tujuan Praktikum

- Memahami konsep Model pada CodeIgniter 4.
- Memahami konsep CRUD.
- Menghubungkan aplikasi dengan database MySQL.
- Membuat aplikasi CRUD sederhana menggunakan CodeIgniter 4.

---

# Tools yang Digunakan

- Visual Studio Code
- XAMPP
- PHP 8.x
- MySQL
- CodeIgniter 4
- Git & GitHub

---

# Langkah-langkah Praktikum

## 1. Membuat Database

Membuat database baru dengan nama:

```sql
CREATE DATABASE lab_ci4;
```

---

## 2. Membuat Tabel Artikel

```sql
CREATE TABLE artikel (
    id INT(11) AUTO_INCREMENT,
    judul VARCHAR(200) NOT NULL,
    isi TEXT,
    gambar VARCHAR(200),
    status TINYINT(1) DEFAULT 0,
    slug VARCHAR(200),
    PRIMARY KEY(id)
);
```

---

## 3. Konfigurasi Database

Melakukan konfigurasi database pada file `.env`.

```ini
database.default.hostname = localhost
database.default.database = lab_ci4
database.default.username = root
database.default.password =
database.default.DBDriver = MySQLi
database.default.port = 3306
```

---

## 4. Membuat Model

Membuat file:

```
app/Models/ArtikelModel.php
```

Model digunakan untuk menghubungkan aplikasi dengan tabel **artikel** pada database.

---

## 5. Membuat Controller

Membuat controller:

```
app/Controllers/Artikel.php
```

Controller berfungsi untuk mengelola proses CRUD serta menghubungkan Model dengan View.

Method yang dibuat:

- index()
- view()
- admin_index()
- add()
- edit()
- delete()

---

## 6. Membuat View

Membuat beberapa halaman:

```
app/Views/artikel/index.php
app/Views/artikel/detail.php
app/Views/artikel/admin_index.php
app/Views/artikel/form_add.php
app/Views/artikel/form_edit.php
```

---

## 7. Menambahkan Routing

Menambahkan route pada file:

```
app/Config/Routes.php
```

```php
$routes->get('/artikel', 'Artikel::index');
$routes->get('/artikel/(:any)', 'Artikel::view/$1');

$routes->group('admin', function($routes){
    $routes->get('artikel', 'Artikel::admin_index');
    $routes->add('artikel/add', 'Artikel::add');
    $routes->add('artikel/edit/(:any)', 'Artikel::edit/$1');
    $routes->get('artikel/delete/(:any)', 'Artikel::delete/$1');
});
```

---

# Fitur yang Berhasil Dibuat

- Menampilkan daftar artikel.
- Menampilkan detail artikel.
- Halaman admin artikel.
- Menambahkan artikel.
- Mengubah data artikel.
- Menghapus artikel.
- Routing halaman artikel.
- Koneksi database menggunakan Model CodeIgniter 4.

---

# Hasil Praktikum

Berikut halaman yang berhasil dibuat:

- Home
- Daftar Artikel
- Detail Artikel
- Admin Artikel
- Form Tambah Artikel
- Form Edit Artikel

### Screenshot Home

<img width="1366" height="720" alt="tampilan web" src="https://github.com/user-attachments/assets/33140c14-1573-4567-a9ff-d49b21127cbf" />

### Screenshot Daftar Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/f059980a-9aa0-4110-8ca0-722b8a58ad4d" />

### Screenshot Detail Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/6ed1f9da-6c07-4f5e-9a42-518f7f6bc095" />

### Screenshot Admin Artikel

<img width="1366" height="720" alt="admin index" src="https://github.com/user-attachments/assets/77626711-1677-47ba-ab52-100307bd6ac3" />

### Screenshot Tambah Artikel

<img width="1366" height="720" alt="tambah artikel" src="https://github.com/user-attachments/assets/98d9d676-cb9c-4c6f-8c61-8f8f141345ad" />

### Screenshot Edit Artikel

<img width="1366" height="720" alt="ubah artikel" src="https://github.com/user-attachments/assets/aa34ce59-10bc-40f5-ba77-c1c63d0e657e" />

---

# Kesimpulan

Pada praktikum ini berhasil dibuat aplikasi CRUD sederhana menggunakan Framework CodeIgniter 4. Aplikasi telah terhubung dengan database MySQL melalui Model, menggunakan Controller sebagai pengelola logika aplikasi, serta View sebagai antarmuka pengguna. Seluruh proses CRUD (Create, Read, Update, Delete) dapat dijalankan dengan baik sehingga memberikan pemahaman mengenai pola arsitektur MVC pada CodeIgniter 4.

# Praktikum 3 - View Layout dan View Cell CodeIgniter 4

# Deskripsi Praktikum

Praktikum ini merupakan lanjutan dari praktikum sebelumnya dengan menerapkan konsep **View Layout** dan **View Cell** pada Framework CodeIgniter 4. View Layout digunakan untuk membuat template tampilan yang dapat digunakan kembali oleh beberapa halaman, sedangkan View Cell digunakan untuk membuat komponen tampilan yang bersifat modular, seperti sidebar yang menampilkan artikel terbaru.

---

# Tujuan Praktikum

- Memahami konsep View Layout pada CodeIgniter 4.
- Menggunakan View Layout sebagai template halaman.
- Memahami konsep View Cell.
- Mengimplementasikan View Cell untuk membuat komponen yang dapat digunakan kembali.

---

# Tools yang Digunakan

- Visual Studio Code
- XAMPP
- PHP 8.x
- MySQL
- CodeIgniter 4
- Git & GitHub

---

# Langkah-langkah Praktikum

## 1. Membuat Layout Utama

Membuat folder:

```
app/Views/layout
```

Kemudian membuat file:

```
main.php
```

Layout utama berisi:

- Header
- Navigation
- Sidebar
- Footer
- renderSection()

---

## 2. Menggunakan View Layout

Mengubah file view agar menggunakan layout baru.

Contoh:

```php
<?= $this->extend('layout/main') ?>

<?= $this->section('content') ?>

<h1><?= $title; ?></h1>
<hr>
<p><?= $content; ?></p>

<?= $this->endSection() ?>
```

Dengan cara ini setiap halaman cukup mengisi bagian **content** tanpa perlu menulis ulang header maupun footer.

---

## 3. Membuat View Cell

Membuat folder:

```
app/Cells
```

Kemudian membuat file:

```
ArtikelTerkini.php
```

View Cell digunakan untuk mengambil data artikel terbaru dari database dan menampilkannya pada sidebar.

---

## 4. Membuat Komponen View Cell

Membuat folder:

```
app/Views/components
```

Kemudian membuat file:

```
artikel_terkini.php
```

Komponen ini digunakan untuk menampilkan daftar artikel terbaru yang terdapat pada database.

---

## 5. Menambahkan Field created_at

Menambahkan field **created_at** pada tabel **artikel** agar artikel terbaru dapat ditampilkan berdasarkan tanggal pembuatan.

```sql
ALTER TABLE artikel
ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
```

---

# Struktur Folder

```
app
├── Cells
│   └── ArtikelTerkini.php
│
├── Views
│   ├── components
│   │   └── artikel_terkini.php
│   │
│   ├── layout
│   │   └── main.php
│   │
│   ├── artikel
│   ├── home.php
│   ├── about.php
│   ├── contact.php
```

---

# Hasil Praktikum

Fitur yang berhasil dibuat:

- Layout utama menggunakan View Layout.
- Header dan Footer digunakan kembali melalui Layout.
- Sidebar menggunakan View Cell.
- Menampilkan artikel terbaru secara otomatis.
- Tampilan lebih modular dan mudah dikembangkan.

---

Pertanyaan dan Tugas
• Sesuaikan data dengan praktikum sebelumnya, perlu melakukan perubahan field pada
database dengan menambahkan tanggal agar dapat mengambil data artikel terbaru.
Jawab: 

<img width="1121" height="243" alt="image" src="https://github.com/user-attachments/assets/8d36859e-8009-4982-91a0-2341744e7ffa" />
<img width="1122" height="268" alt="image" src="https://github.com/user-attachments/assets/d65d0a02-77d9-4626-a995-688d0fc45f27" />

• Selesaikan programnya sesuai Langkah-langkah yang ada. Anda boleh melakukan
improvisasi.
• Apa manfaat utama dari penggunaan View Layout dalam pengembangan aplikasi?
Jawab:
View Layout memudahkan pengembang dalam membuat template halaman yang konsisten. Dengan menggunakan Layout, bagian seperti header, footer, menu navigasi, dan sidebar cukup dibuat satu kali sehingga dapat digunakan kembali pada banyak halaman. Hal ini membuat kode lebih rapi, mudah dipelihara, dan mengurangi penulisan kode yang berulang.

• Jelaskan perbedaan antara View Cell dan View biasa.
Jawab: 
| View Biasa | View Cell |
|------------|-----------|
| Digunakan untuk menampilkan halaman utama. | Digunakan untuk membuat komponen kecil yang dapat digunakan kembali. |
| Dipanggil melalui Controller menggunakan `return view()`. | Dipanggil langsung dari View menggunakan `view_cell()`. |
| Biasanya berisi seluruh isi halaman. | Biasanya digunakan untuk sidebar, widget, menu, atau komponen lainnya. |
| Tidak memiliki class tersendiri. | Memiliki class sendiri sehingga dapat menjalankan logika tertentu sebelum menampilkan data. |

---

• Ubah View Cell agar hanya menampilkan post dengan kategori tertentu
Jawab:

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/14c5ef48-3aab-4c99-bdcf-5cb580c97b79" />

---

# Kesimpulan

Pada praktikum ini berhasil diterapkan konsep **View Layout** dan **View Cell** pada Framework CodeIgniter 4. View Layout membuat tampilan aplikasi menjadi lebih terstruktur dan mudah dipelihara, sedangkan View Cell memungkinkan pembuatan komponen yang dapat digunakan kembali, seperti sidebar artikel terbaru. Dengan penerapan kedua konsep tersebut, pengembangan aplikasi menjadi lebih efisien, modular, dan mudah dikembangkan di masa mendatang.

---

# Praktikum 4 - Framework Lanjutan (Modul Login) CodeIgniter 4

# Deskripsi Praktikum

Pada praktikum ini dikembangkan sebuah **modul login** menggunakan Framework CodeIgniter 4. Modul login digunakan sebagai sistem autentikasi pengguna sebelum mengakses halaman administrator. Selain itu diterapkan **Auth Filter** untuk membatasi akses ke halaman admin sehingga hanya pengguna yang telah login yang dapat mengaksesnya.

---

# Tujuan Praktikum

- Memahami konsep Authentication (Auth).
- Memahami penggunaan Filter pada CodeIgniter 4.
- Membuat sistem login menggunakan CodeIgniter 4.
- Melindungi halaman administrator menggunakan Auth Filter.
- Membuat fitur logout.

---

# Tools yang Digunakan

- Visual Studio Code
- XAMPP
- PHP 8.x
- MySQL
- CodeIgniter 4
- Git
- GitHub

---

# Langkah-langkah Praktikum

## 1. Membuat Tabel User

Membuat tabel **user** pada database sebagai tempat penyimpanan data akun login.

Struktur tabel:

| Field | Tipe | Keterangan |
|-------|------|------------|
| id | INT | Primary Key, Auto Increment |
| username | VARCHAR(200) | Username |
| useremail | VARCHAR(200) | Email |
| userpassword | VARCHAR(200) | Password (Hash) |

SQL:

```sql
CREATE TABLE user (
    id INT(11) AUTO_INCREMENT,
    username VARCHAR(200) NOT NULL,
    useremail VARCHAR(200),
    userpassword VARCHAR(200),
    PRIMARY KEY(id)
);
```

---

## 2. Membuat UserModel

Membuat file:

```
app/Models/UserModel.php
```

Model digunakan untuk mengelola data pengguna pada tabel **user**.

---

## 3. Membuat Controller User

Membuat file:

```
app/Controllers/User.php
```

Controller ini memiliki beberapa fungsi, yaitu:

- Menampilkan daftar user.
- Memproses login.
- Memverifikasi email dan password.
- Menyimpan session pengguna setelah login berhasil.
- Menampilkan pesan kesalahan apabila login gagal.

---

## 4. Membuat Halaman Login

Membuat folder:

```
app/Views/user
```

Kemudian membuat file:

```
login.php
```

Halaman login berisi:

- Form Email
- Form Password
- Tombol Login
- Pesan Error menggunakan Flashdata

---

## 5. Membuat Database Seeder

Membuat Seeder:

```
php spark make:seeder UserSeeder
```

Seeder digunakan untuk membuat data user administrator secara otomatis.

Contoh data:

| Username | Email | Password |
|----------|-------|----------|
| admin | admin@email.com | admin123 |

Password disimpan menggunakan fungsi **password_hash()** sehingga lebih aman.

---

## 6. Menjalankan Seeder

Menjalankan perintah:

```bash
php spark db:seed UserSeeder
```

Data administrator akan otomatis masuk ke tabel **user**.

---

## 7. Membuat Auth Filter

Membuat file:

```
app/Filters/Auth.php
```

Filter digunakan untuk mengecek apakah pengguna sudah login.

Jika belum login maka pengguna akan otomatis diarahkan menuju halaman login.

---

## 8. Mengatur Config Filters

Menambahkan Auth Filter pada:

```
app/Config/Filters.php
```

Kemudian memberikan alias:

```php
'auth' => App\Filters\Auth::class
```

---

## 9. Mengatur Routes

Mengubah file:

```
app/Config/Routes.php
```

Sehingga halaman administrator hanya dapat diakses setelah login.

---

## 10. Menambahkan Logout

Menambahkan method:

```php
logout()
```

Pada Controller **User**.

Logout digunakan untuk menghapus seluruh session pengguna kemudian mengarahkan kembali ke halaman login.

---

# Alur Login

```
User
   │
   ▼
Halaman Login
   │
Input Email & Password
   │
   ▼
Controller User
   │
Validasi Email
   │
Validasi Password
   │
   ▼
Session Login
   │
   ▼
Halaman Admin Artikel
```

---

# Hasil Praktikum

Fitur yang berhasil dibuat:

- Login Administrator.
- Validasi Email.
- Validasi Password.
- Password terenkripsi menggunakan Hash.
- Session Login.
- Auth Filter.
- Logout.
- Halaman Admin hanya dapat diakses setelah login.

---

# Screenshot

### Login Form

<img width="1366" height="720" alt="login form" src="https://github.com/user-attachments/assets/f0acfe36-168f-42be-b205-120cefab81c1" />

---

### Login Admin

<img width="1366" height="720" alt="login admin" src="https://github.com/user-attachments/assets/c0be64ba-b761-4f3c-9819-3dac07e7d820" />

---

# Kesimpulan

Pada praktikum ini berhasil dibuat sistem autentikasi sederhana menggunakan Framework CodeIgniter 4. Sistem login memanfaatkan Model, Controller, Session, Database Seeder, dan Auth Filter untuk mengelola proses autentikasi pengguna. Dengan adanya Auth Filter, halaman administrator menjadi lebih aman karena hanya dapat diakses oleh pengguna yang telah berhasil melakukan login.

---

# Praktikum 5 - Pagination dan Pencarian Menggunakan CodeIgniter 4

# Deskripsi Praktikum

Pada praktikum ini dilakukan pengembangan aplikasi Portal Berita dengan menambahkan fitur **Pagination** dan **Pencarian (Search)** menggunakan Framework CodeIgniter 4. Pagination digunakan untuk membatasi jumlah data yang ditampilkan pada setiap halaman, sedangkan fitur pencarian digunakan untuk mempermudah pengguna dalam menemukan artikel berdasarkan judul.

---

# Tujuan Praktikum

- Memahami konsep Pagination pada CodeIgniter 4.
- Memahami konsep Pencarian (Search).
- Mengimplementasikan Pagination pada daftar artikel.
- Mengimplementasikan fitur pencarian berdasarkan judul artikel.

---

# Tools yang Digunakan

- Visual Studio Code
- XAMPP
- PHP 8.x
- MySQL
- CodeIgniter 4
- Git
- GitHub

---

# Langkah-langkah Praktikum

## 1. Membuat Pagination

Pada method `admin_index()` di `Artikel.php`, dilakukan perubahan dengan menggunakan fungsi `paginate()`.

```php
public function admin_index()
{
    $title = 'Daftar Artikel';

    $model = new ArtikelModel();

    $data = [
        'title'   => $title,
        'artikel' => $model->paginate(10),
        'pager'   => $model->pager,
    ];

    return view('artikel/admin_index', $data);
}
```

### Penjelasan

- `paginate(10)` digunakan untuk membatasi jumlah artikel sebanyak 10 data setiap halaman.
- `pager` digunakan untuk menghasilkan navigasi halaman secara otomatis.

---

## 2. Menampilkan Navigasi Pagination

Pada file:

```
app/Views/artikel/admin_index.php
```

ditambahkan kode berikut di bawah tabel artikel.

```php
<?= $pager->links(); ?>
```

Dengan penambahan kode tersebut, halaman admin akan menampilkan navigasi pagination secara otomatis ketika jumlah data melebihi 10 artikel.

---

## 3. Membuat Fitur Pencarian

Method `admin_index()` kemudian dimodifikasi kembali untuk mendukung pencarian berdasarkan judul artikel.

```php
public function admin_index()
{
    $title = 'Daftar Artikel';

    $q = $this->request->getVar('q') ?? '';

    $model = new ArtikelModel();

    $data = [
        'title'   => $title,
        'q'       => $q,
        'artikel' => $model->like('judul', $q)
                           ->paginate(10),
        'pager'   => $model->pager,
    ];

    return view('artikel/admin_index', $data);
}
```

### Penjelasan

- `getVar('q')` digunakan untuk mengambil nilai pencarian dari form.
- `like('judul', $q)` digunakan untuk mencari artikel berdasarkan judul yang mengandung kata kunci.
- Hasil pencarian tetap menggunakan Pagination.

---

## 4. Menambahkan Form Pencarian

Pada file:

```
app/Views/artikel/admin_index.php
```

ditambahkan form pencarian sebelum tabel daftar artikel.

Contoh tampilan:

- Input kata kunci.
- Tombol Search.
- Daftar artikel akan otomatis menampilkan hasil sesuai kata kunci.

---

# Hasil Praktikum

Fitur yang berhasil dibuat:

- Menampilkan daftar artikel dengan Pagination.
- Membatasi jumlah artikel sebanyak 10 data per halaman.
- Navigasi halaman otomatis.
- Pencarian artikel berdasarkan judul.
- Pagination tetap berjalan pada hasil pencarian.

---

# Screenshot

Tambahkan screenshot berikut:

### Halaman Admin Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/cc35c33a-00ac-410c-bd6a-12603a24c854" />

---

### Pagination

<img width="1365" height="308" alt="image" src="https://github.com/user-attachments/assets/ad928c05-d3cc-4800-b514-2e4a371aacc5" />

---

### Form Pencarian

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/331ac887-5e57-4f5f-b499-4dfcab137424" />

---

### Hasil Pencarian

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/b970ce45-dcdb-490c-a222-c775e18cf845" />

---

# Kesimpulan

Pada praktikum ini berhasil diterapkan fitur Pagination dan Pencarian pada aplikasi Portal Berita menggunakan CodeIgniter 4. Pagination membuat tampilan data menjadi lebih rapi dan mudah dinavigasi, sedangkan fitur pencarian membantu pengguna menemukan artikel berdasarkan judul dengan lebih cepat. Kombinasi kedua fitur tersebut meningkatkan kemudahan penggunaan aplikasi dalam mengelola data artikel.

---

# Praktikum 6 - Upload File Gambar pada Artikel Menggunakan CodeIgniter 4

### Deskripsi Praktikum

Pada praktikum ini dilakukan pengembangan aplikasi Portal Berita dengan menerapkan relasi antar tabel menggunakan konsep One-to-Many antara tabel kategori dan artikel. Selain itu digunakan Query Builder CodeIgniter 4 untuk melakukan proses JOIN, pencarian data, filter kategori, serta menampilkan informasi kategori pada setiap artikel.

### Tujuan Praktikum
Memahami konsep relasi tabel pada database.
Mengimplementasikan relasi One-to-Many.
Menggunakan Query Builder CodeIgniter 4.
Melakukan JOIN antar tabel.
Menampilkan data artikel beserta kategori.
Membuat filter artikel berdasarkan kategori.

### Tools yang Digunakan
Visual Studio Code
XAMPP
PHP 8.x
MySQL
CodeIgniter 4
Git
GitHub

### Langkah-langkah Praktikum
1. Membuat Tabel Kategori

Membuat tabel baru kategori pada database.

### Struktur tabel:

Field	Tipe Data	Keterangan
id_kategori	INT	Primary Key, Auto Increment
nama_kategori	VARCHAR(100)	Nama kategori
slug_kategori	VARCHAR(100)	Slug kategori

SQL:
```
CREATE TABLE kategori (
    id_kategori INT(11) AUTO_INCREMENT,
    nama_kategori VARCHAR(100) NOT NULL,
    slug_kategori VARCHAR(100),
    PRIMARY KEY(id_kategori)
);
```

2. Membuat Relasi Tabel

Menambahkan field id_kategori pada tabel artikel sebagai Foreign Key.
```
SQL:

ALTER TABLE artikel
ADD COLUMN id_kategori INT(11),
ADD CONSTRAINT fk_kategori_artikel
FOREIGN KEY (id_kategori)
REFERENCES kategori(id_kategori);
```

Relasi yang digunakan adalah:

Kategori (1)
      │
      │
      ├───────────────< Artikel (N)

Satu kategori dapat memiliki banyak artikel.

3. Membuat KategoriModel

Membuat file:

app/Models/KategoriModel.php

Model ini digunakan untuk mengelola data kategori pada database.

4. Memodifikasi ArtikelModel

Pada ArtikelModel ditambahkan method:

getArtikelDenganKategori()

Method tersebut menggunakan JOIN untuk mengambil data artikel beserta nama kategorinya.

Contoh Query Builder:

return $this->db->table('artikel')
    ->select('artikel.*, kategori.nama_kategori')
    ->join('kategori', 'kategori.id_kategori = artikel.id_kategori')
    ->get()
    ->getResultArray();
    
5. Memodifikasi Controller Artikel

Controller Artikel.php diperbarui agar:

Menampilkan artikel beserta nama kategori.
Menampilkan daftar kategori.
Menambahkan filter kategori.
Mendukung pencarian berdasarkan judul.
Menggunakan pagination.
6. Memodifikasi View

Beberapa file view diperbarui, yaitu:

artikel/index.php
artikel/admin_index.php
artikel/form_add.php
artikel/form_edit.php

Perubahan yang dilakukan:

Menampilkan nama kategori pada daftar artikel.
Menambahkan dropdown kategori pada form tambah artikel.
Menambahkan dropdown kategori pada form edit artikel.
Menambahkan filter kategori pada halaman admin.
7. Menampilkan Artikel Beserta Kategori

Daftar artikel kini menampilkan informasi kategori.

Contoh tampilan:

Judul Artikel

Kategori : Tutorial

Isi artikel...
8. Filter Berdasarkan Kategori

Halaman administrator dilengkapi fitur filter kategori.

Admin dapat:

Melihat seluruh artikel.
Memfilter artikel berdasarkan kategori tertentu.
Menggabungkan filter kategori dengan fitur pencarian.
9. Pengujian

Pengujian dilakukan terhadap beberapa fitur:

Menampilkan daftar artikel.
Menampilkan nama kategori.
Menambah artikel dengan kategori.
Mengubah kategori artikel.
Menghapus artikel.
Filter berdasarkan kategori.
Pencarian artikel.
Pagination.

Semua fitur berhasil dijalankan dengan baik.

Alur Relasi Data
Kategori
   │
   ▼
id_kategori
   │
   ▼
Artikel
   │
   ▼
Query Builder JOIN
   │
   ▼
Controller
   │
   ▼
View
   │
   ▼
Website
Hasil Praktikum

Fitur yang berhasil dibuat:

Relasi One-to-Many antara tabel kategori dan artikel.
Query JOIN menggunakan Query Builder.
Menampilkan nama kategori pada artikel.
Dropdown kategori pada form tambah artikel.
Dropdown kategori pada form edit artikel.
Filter artikel berdasarkan kategori.
Pencarian artikel.
Pagination.

Daftar Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/ffeaf057-9c90-4b87-9d23-1609409e08b3" />

Form Tambah Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/e8a493f2-9d56-42ff-8a8a-0683c26e392a" />

Form Edit Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/0a3f6960-e773-4f6c-9be7-854a7f1e2c70" />

Filter Kategori

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/57f3b263-c3a4-4d03-ac30-4f612b9f7cf1" />

Kesimpulan

Pada praktikum ini berhasil diterapkan relasi One-to-Many antara tabel kategori dan artikel menggunakan Foreign Key. Query Builder CodeIgniter 4 dimanfaatkan untuk melakukan proses JOIN sehingga informasi kategori dapat ditampilkan bersama data artikel. Selain itu, aplikasi dilengkapi fitur filter kategori, pencarian, dan pagination yang membuat pengelolaan data menjadi lebih mudah dan terstruktur.

---

# Praktikum 7 - Upload File Gambar

### Deskripsi Praktikum

Pada praktikum ini dilakukan pengembangan aplikasi Portal Berita dengan menambahkan fitur Upload File Gambar menggunakan Framework CodeIgniter 4. Fitur ini memungkinkan administrator mengunggah gambar ketika menambahkan artikel sehingga setiap artikel dapat memiliki ilustrasi yang tersimpan di server dan ditampilkan pada halaman website.

### Tujuan Praktikum
Memahami konsep dasar upload file pada CodeIgniter 4.
Membuat fitur upload gambar pada form tambah artikel.
Menyimpan file gambar ke dalam folder public/gambar.
Menyimpan nama file gambar ke database.
Menampilkan gambar pada halaman artikel.

### Tools yang Digunakan
Visual Studio Code
XAMPP
PHP 8.x
MySQL
CodeIgniter 4
Git
GitHub

### Langkah-langkah Praktikum
# 1. Memodifikasi Controller Artikel

Method add() pada file Artikel.php dimodifikasi agar dapat menerima file gambar yang diunggah melalui form. File kemudian dipindahkan ke folder public/gambar dan nama file disimpan ke database bersama data artikel.

# 2. Menambahkan Input Upload Gambar

Pada file app/Views/artikel/form_add.php ditambahkan input bertipe file agar pengguna dapat memilih gambar saat menambahkan artikel.

<input type="file" name="gambar">

# 3. Mengubah Form Menjadi Multipart

Tag <form> diubah dengan menambahkan atribut berikut agar proses upload file dapat berjalan.

<form action="" method="post" enctype="multipart/form-data">
    
# 4. Melakukan Upload Gambar

Administrator mengisi data artikel, memilih file gambar, kemudian menekan tombol Kirim. Sistem akan menyimpan gambar ke folder public/gambar dan nama file ke database.

# 5. Menampilkan Gambar

Gambar yang telah diunggah dapat ditampilkan pada halaman daftar artikel maupun halaman detail artikel menggunakan fungsi base_url().

Contoh:

<img src="<?= base_url('/gambar/' . $row['gambar']); ?>">

# Hasil Praktikum

Setelah seluruh langkah selesai dilakukan, aplikasi berhasil memiliki fitur:

Upload gambar saat menambah artikel.
Penyimpanan file gambar ke folder public/gambar.
Penyimpanan nama file ke database.
Menampilkan gambar pada halaman daftar artikel.
Menampilkan gambar pada halaman detail artikel.

### 1. Form Tambah Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/d6f50bd6-e595-45e9-8dca-c827eb2ef5a5" />

### 2. Proses Upload Berhasil

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/9f1866ec-91dc-49dc-95f0-72addafe82ba" />


### 3. Halaman Daftar Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/a8b26b39-42c1-41fc-ae6d-94b8f5bfa21f" />


Kesimpulan

Pada praktikum ini berhasil dibuat fitur Upload File Gambar menggunakan Framework CodeIgniter 4. Gambar yang dipilih oleh administrator dapat diunggah dan disimpan pada folder public/gambar, sedangkan nama file disimpan ke dalam database. Dengan adanya fitur ini, setiap artikel dapat ditampilkan dengan gambar sehingga tampilan website menjadi lebih menarik dan informatif.

---

# Praktikum 8 - AJAX

Deskripsi Praktikum

Pada praktikum ini dilakukan pengembangan aplikasi Portal Berita dengan menerapkan teknologi AJAX (Asynchronous JavaScript and XML) menggunakan jQuery pada Framework CodeIgniter 4. AJAX memungkinkan aplikasi mengambil, menampilkan, dan menghapus data artikel tanpa perlu melakukan reload halaman sehingga tampilan menjadi lebih responsif dan interaktif.

Tujuan Praktikum
Memahami konsep dasar AJAX.
Memahami cara kerja AJAX menggunakan jQuery.
Mengimplementasikan AJAX pada aplikasi CodeIgniter 4.
Menampilkan data artikel secara dinamis.
Menghapus data artikel menggunakan AJAX.
Tools yang Digunakan
Visual Studio Code
XAMPP
PHP 8.x
MySQL
CodeIgniter 4
jQuery 3.6.0
Git
GitHub
Langkah-langkah Praktikum
1. Menambahkan Library jQuery

Mengunduh file jQuery 3.6.0 kemudian menyimpannya pada folder:

public/assets/js/

Library ini digunakan untuk mempermudah proses AJAX.

2. Membuat AJAX Controller

Membuat controller baru dengan nama AjaxController.php.

Controller ini memiliki beberapa method, yaitu:

index() untuk menampilkan halaman AJAX.
getData() untuk mengambil data artikel dalam format JSON.
delete($id) untuk menghapus data artikel berdasarkan ID.
3. Membuat Halaman AJAX

Membuat file view ajax/index.php yang berisi tabel data artikel.

Data tabel tidak ditulis secara langsung, tetapi akan dimuat melalui AJAX ketika halaman dibuka.

4. Mengambil Data Menggunakan AJAX

Menggunakan fungsi $.ajax() dengan method GET untuk mengambil data artikel dari server.

Data yang diterima dalam format JSON, kemudian ditampilkan ke dalam tabel secara otomatis tanpa melakukan refresh halaman.

5. Menghapus Data Menggunakan AJAX

Menambahkan tombol Delete pada setiap data artikel.

Saat tombol Delete ditekan:

muncul konfirmasi penghapusan,
AJAX mengirim request ke server,
data dihapus dari database,
tabel diperbarui secara otomatis tanpa reload halaman.
6. Pengujian

Pengujian dilakukan untuk memastikan:

Data artikel berhasil ditampilkan menggunakan AJAX.
Data dapat dimuat tanpa reload halaman.
Data berhasil dihapus menggunakan AJAX.
Tampilan tabel otomatis diperbarui setelah proses penghapusan.
Cara Kerja AJAX
User
   │
   ▼
Halaman AJAX
   │
   ▼
JavaScript (jQuery)
   │
AJAX Request
   │
   ▼
AjaxController
   │
ArtikelModel
   │
Database
   │
   ▼
Response JSON
   │
   ▼
Tabel Artikel
Hasil Praktikum

Fitur yang berhasil dibuat:

Menampilkan data artikel menggunakan AJAX.
Mengambil data dalam format JSON.
Menghapus data artikel tanpa reload halaman.
Menggunakan jQuery untuk komunikasi dengan server.
Memperbarui isi tabel secara otomatis setelah data berubah.

Tambahkan screenshot berikut pada README.

1. Halaman Data Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/d0c16b9c-e677-47dd-aee5-bf39b4dfc53e" />

### 2. Tambah Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/e507427a-45ed-4735-9d6d-5755ef1f9112" />

### 3. Edit Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/4db933f9-9055-431d-b2ae-0aeac710c071" />

### Hapus artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/d65b4e6f-5d33-4fc0-a38b-c50da99f48ee" />

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/f4164138-16c9-4824-988e-6e307becf95a" />

Kesimpulan

Pada praktikum ini berhasil diimplementasikan teknologi AJAX menggunakan jQuery pada aplikasi Portal Berita berbasis CodeIgniter 4. Data artikel dapat diambil dan ditampilkan secara dinamis dalam format JSON tanpa perlu melakukan reload halaman. Selain itu, fitur penghapusan data juga berhasil diterapkan menggunakan AJAX sehingga proses pengelolaan artikel menjadi lebih cepat, responsif, dan memberikan pengalaman pengguna yang lebih baik.

---

# Praktikum 9 – Implementasi AJAX Pagination dan Search

Deskripsi

Pada praktikum ini dilakukan implementasi AJAX Pagination dan AJAX Search pada aplikasi Portal Berita menggunakan CodeIgniter 4. Dengan AJAX, proses pencarian dan perpindahan halaman dilakukan tanpa me-refresh halaman sehingga aplikasi menjadi lebih cepat dan interaktif.

Tujuan
Memahami konsep AJAX pada CodeIgniter 4.
Mengimplementasikan pagination menggunakan AJAX.
Mengimplementasikan fitur pencarian menggunakan AJAX.
Meningkatkan performa dan User Experience (UX) aplikasi.
Langkah-langkah Praktikum
1. Memodifikasi Controller

Method admin_index() pada Artikel.php diubah agar dapat mendeteksi request AJAX menggunakan:

if ($this->request->isAJAX()) {
    return $this->response->setJSON($data);
}

Apabila request berasal dari AJAX maka data artikel dikirim dalam format JSON, sedangkan request biasa tetap menampilkan halaman admin.

2. Menambahkan AJAX Search

Form pencarian diubah agar menggunakan jQuery AJAX sehingga proses pencarian tidak perlu melakukan reload halaman.

Screenshot:
<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/66860c53-a752-4c2f-9c2a-85d9905af9f3" />

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/50eea548-3297-4e70-956f-6829f6f051d1" />

3. Menambahkan AJAX Pagination

Pagination diubah menjadi AJAX sehingga perpindahan halaman artikel berlangsung lebih cepat tanpa memuat ulang halaman.

4. Menampilkan Data Artikel

Data artikel ditampilkan secara dinamis menggunakan JavaScript setelah menerima data JSON dari Controller.

Informasi yang ditampilkan meliputi:

ID Artikel
Judul
Kategori
Status
Tombol Ubah
Tombol Hapus

5. Pengujian

Pengujian dilakukan dengan beberapa skenario:

Menampilkan seluruh artikel.
Melakukan pencarian berdasarkan judul.
Memfilter berdasarkan kategori.
Berpindah halaman menggunakan pagination.
Menghapus artikel.

Seluruh fitur berhasil berjalan menggunakan AJAX tanpa melakukan reload halaman.

Hasil Praktikum

Hasil implementasi menunjukkan bahwa fitur AJAX berhasil diterapkan pada halaman admin artikel. Data dapat ditampilkan, dicari, difilter, dan dipindahkan halamannya secara dinamis tanpa melakukan refresh halaman sehingga aplikasi menjadi lebih responsif.

Kesimpulan

Praktikum ini memberikan pemahaman mengenai penggunaan AJAX pada CodeIgniter 4 untuk meningkatkan interaktivitas aplikasi web. Dengan memanfaatkan jQuery AJAX, proses pencarian dan pagination dapat dilakukan secara asynchronous sehingga mempercepat akses data serta memberikan pengalaman pengguna yang lebih baik. Selain itu, penggunaan format JSON memudahkan pertukaran data antara server dan browser.

---

# Praktikum 10 - REST API dengan CodeIgniter 4

Pada praktikum ini dibuat sebuah **REST API** menggunakan Framework **CodeIgniter 4**. API yang dibuat dapat digunakan untuk menampilkan, menambah, mengubah, dan menghapus data artikel menggunakan metode HTTP seperti GET, POST, PUT, dan DELETE. Pengujian API dilakukan menggunakan aplikasi **Postman**.

---

## 1. Persiapan

Menginstal aplikasi **Postman** sebagai REST Client untuk melakukan pengujian endpoint API.

---

## 2. Membuat REST Controller

Membuat file `Post.php` pada folder `app/Controllers`.

Controller ini menggunakan `ResourceController` dan berisi method:

- `index()` untuk menampilkan seluruh data artikel.
- `show()` untuk menampilkan data berdasarkan ID.
- `create()` untuk menambahkan data baru.
- `update()` untuk mengubah data artikel.
- `delete()` untuk menghapus data artikel.

---

## 3. Membuat Routing REST API

Menambahkan routing berikut pada file `app/Config/Routes.php`.

```php
$routes->resource('post');
```

Selanjutnya menjalankan perintah:

```bash
php spark routes
```

untuk memastikan seluruh endpoint REST API berhasil dibuat.

<img width="1366" height="720" alt="php routes 10" src="https://github.com/user-attachments/assets/893e42e3-2e0c-4748-b034-f093c93d1a4e" />

---

## 4. Pengujian API Menggunakan Postman

### Menampilkan Semua Data

Melakukan request menggunakan method **GET**.

```
GET http://localhost:8080/post
```

API berhasil menampilkan seluruh data artikel dalam format JSON.

<img width="1366" height="720" alt="get post 10" src="https://github.com/user-attachments/assets/488ce79d-d8c7-4288-9ba8-9f11c2a49699" />

---

### Menampilkan Data Berdasarkan ID

Melakukan request menggunakan method **GET**.

```
GET http://localhost:8080/post/12
```

API berhasil menampilkan data artikel berdasarkan ID.

<img width="1366" height="720" alt="get post 2 10" src="https://github.com/user-attachments/assets/095499a6-9fcd-4ddd-be6f-ede785d41543" />

---

### Menambahkan Data

Melakukan request menggunakan method **POST**.

```
POST http://localhost:8080/post
```

Body menggunakan **x-www-form-urlencoded** dengan data:

- judul
- isi

Data baru berhasil ditambahkan ke database.

<img width="1366" height="720" alt="post 4 10" src="https://github.com/user-attachments/assets/961873dc-aa22-4730-aef7-442453f488f3" />

---

### Mengubah Data

Melakukan request menggunakan method **PUT**.

```
PUT http://localhost:8080/post/12
```

Body menggunakan **x-www-form-urlencoded** untuk mengubah data artikel.

<img width="1366" height="720" alt="put post 3 10" src="https://github.com/user-attachments/assets/9b9a1a1e-2c44-4a41-98a7-7605001ce5f5" />

---

### Menghapus Data

Melakukan request menggunakan method **DELETE**.

```
DELETE http://localhost:8080/post/8
```

Data artikel berhasil dihapus dari database.

<img width="1366" height="720" alt="delete 5 post 10" src="https://github.com/user-attachments/assets/2c6b8bbb-6de6-4fc5-a57d-9779d1c593d2" />

---

# Hasil Praktikum

REST API berhasil dibuat menggunakan CodeIgniter 4 dan seluruh endpoint dapat dijalankan dengan baik menggunakan Postman.

---

# Praktikum 11 - VueJS

# Tujuan Praktikum

- Memahami konsep dasar API.
- Memahami konsep dasar Framework VueJS.
- Membuat Frontend API menggunakan VueJS 3.

---

# Langkah-langkah Praktikum

## 1. Membuat Project VueJS

Membuat project baru dengan struktur folder sebagai berikut.

```text
lab8_vuejs/
│
├── index.html
│
└── assets
    ├── css
    │   └── style.css
    └── js
        └── app.js
```

---

## 2. Menambahkan Library VueJS dan Axios

Menambahkan library VueJS dan Axios menggunakan CDN pada file `index.html`.

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

Library VueJS digunakan untuk membangun tampilan aplikasi, sedangkan Axios digunakan untuk mengakses REST API.

---

## 3. Menampilkan Data Artikel

Data artikel diambil dari REST API menggunakan Axios.

```javascript
axios.get(apiUrl + '/post')
```

Data ditampilkan menggunakan directive `v-for`.

Fitur yang ditampilkan meliputi:

- ID Artikel
- Judul Artikel
- Status
- Tombol Edit
- Tombol Hapus

---

## 4. Membuat Form Tambah Data

Menambahkan tombol **Tambah Data** yang akan membuka form dalam bentuk modal.

Field yang tersedia yaitu:

- Judul
- Isi Artikel
- Status

Data dikirim menggunakan method **POST**.

<img width="1366" height="720" alt="vue1 11" src="https://github.com/user-attachments/assets/044ae8b7-1282-4e0e-b009-edb94ca80ef9" />

<img width="1366" height="720" alt="vue2" src="https://github.com/user-attachments/assets/b5705939-8211-492b-b590-a2077e1b96f6" />

---

## 5. Membuat Fitur Edit Data

Saat tombol **Edit** dipilih, data artikel akan ditampilkan pada form untuk diubah.

Perubahan data dikirim menggunakan method **PUT**.

<img width="1366" height="720" alt="vue3" src="https://github.com/user-attachments/assets/83cb40df-cf2e-4cdd-8c52-2a8e04180f8b" />

<img width="1366" height="720" alt="vue4" src="https://github.com/user-attachments/assets/3690ffe1-0fa1-47f8-8b00-6d3b6247eee6" />

---

## 6. Membuat Fitur Hapus Data

Saat tombol **Hapus** dipilih, sistem akan menampilkan konfirmasi terlebih dahulu.

Jika pengguna memilih **OK**, maka data akan dihapus menggunakan method **DELETE**.

<img width="1366" height="720" alt="vue hapus 5" src="https://github.com/user-attachments/assets/7d8faf2a-b67a-40fd-9758-42226638bf8f" />

<img width="1366" height="720" alt="vue6" src="https://github.com/user-attachments/assets/b77855bb-be5d-4caa-a6e1-8a539632c402" />

---

## 7. Membuat Tampilan CSS

File `style.css` digunakan untuk mempercantik tampilan aplikasi.

Style diterapkan pada:

- Tabel
- Tombol
- Form
- Modal
- Header
- Layout halaman

Sehingga tampilan aplikasi menjadi lebih menarik dan mudah digunakan.

---

# Hasil Praktikum

Hasil akhir aplikasi berhasil menjalankan operasi CRUD menggunakan VueJS dan REST API CodeIgniter 4 tanpa melakukan reload halaman.

---

# Kesimpulan

Pada praktikum ini berhasil dibuat aplikasi frontend menggunakan VueJS 3 yang terhubung dengan REST API CodeIgniter 4. VueJS mempermudah pengelolaan tampilan melalui konsep reactive data binding, sedangkan Axios digunakan untuk melakukan komunikasi dengan REST API tanpa melakukan reload halaman. Dengan demikian aplikasi menjadi lebih interaktif, responsif, dan mudah dikembangkan.

---

# Praktikum 12 - VueJS Komponen dan Routing (Single Page Application)

Pada praktikum ini dilakukan pengembangan aplikasi VueJS dengan menerapkan konsep **Vue Component** dan **Vue Router** sehingga aplikasi dapat berjalan sebagai **Single Page Application (SPA)**. Dengan Vue Router, perpindahan halaman dapat dilakukan tanpa melakukan reload browser.

---

## 1. Menambahkan Library Vue Router

Menambahkan library **Vue Router** melalui CDN pada file `index.html`.

---

## 2. Membuat Komponen Home

Membuat file `Home.js` pada folder `assets/js/components` sebagai halaman beranda yang menampilkan informasi selamat datang kepada pengguna.

---

## 3. Membuat Komponen Artikel

Memindahkan seluruh fitur CRUD artikel ke dalam file `Artikel.js` sehingga kode menjadi lebih terstruktur dan mudah dikelola.

Fitur yang tersedia:
- Menampilkan data artikel.
- Menambah artikel.
- Mengubah artikel.
- Menghapus artikel.

---

## 4. Mengatur Vue Router

Melakukan konfigurasi routing pada file `app.js` dengan menambahkan route untuk halaman **Beranda** dan **Kelola Artikel** menggunakan `createRouter()` dan `createWebHashHistory()`.

---

## 5. Memodifikasi Halaman Utama

Memodifikasi file `index.html` dengan menambahkan:

- `router-link` sebagai menu navigasi.
- `router-view` sebagai tempat menampilkan halaman sesuai route.

---

## 6. Menambahkan CSS

Menambahkan style untuk menu navigasi, halaman Home, dan route aktif agar tampilan aplikasi menjadi lebih menarik.

---

## 7. Menambahkan Halaman About

Membuat file `About.js` yang berisi:

- Nama
- NIM
- Kelas
- Foto/Avatar

Selanjutnya menambahkan route `/about` pada `app.js` serta menu **About** pada navigasi aplikasi.

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/a4b0ecfa-79c5-4c05-81a6-60b837d4caea" />

# 8. Tampilan beranda

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/cb70dff2-5dbb-47c5-b4bd-a9a97d174534" />

# 9. Tampilan kelola artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/be081619-1a91-45a5-8aff-deea5a8bd1ee" />

---

# Hasil Praktikum

Setelah seluruh langkah selesai, aplikasi berhasil berjalan sebagai **Single Page Application (SPA)** menggunakan VueJS dan Vue Router.

---

# Praktikum 13 - VueJS Autentikasi dan Navigation Guards (SPA Security)

## Deskripsi
Praktikum ini membahas implementasi sistem autentikasi pada aplikasi Single Page Application (SPA) menggunakan VueJS 3 dan Vue Router. Selain itu, dibuat juga REST API Login pada backend CodeIgniter 4 yang digunakan untuk memvalidasi data pengguna. Proteksi halaman dilakukan menggunakan Navigation Guards (`beforeEach`) sehingga hanya pengguna yang telah login yang dapat mengakses halaman admin.

---

## Tujuan Praktikum

- Memahami konsep keamanan pada aplikasi Single Page Application (SPA).
- Memahami penggunaan Navigation Guards pada Vue Router.
- Membuat API Login menggunakan CodeIgniter 4.
- Menghubungkan frontend VueJS dengan backend melalui REST API.
- Mengimplementasikan sistem Login, Logout, dan proteksi halaman menggunakan Local Storage.

---

## Langkah-langkah Praktikum

### 1. Membuat API Login pada Backend CodeIgniter 4

Membuat controller `Auth.php` pada folder:

```text
app/Controllers/Api/Auth.php
```

Controller ini berfungsi untuk:

- menerima username dan password dari frontend
- melakukan validasi data pengguna
- mengirimkan response JSON
- menghasilkan token sederhana apabila login berhasil

---

### 2. Menambahkan Route Login

Menambahkan route pada file:

```php
app/Config/Routes.php
```

```php
$routes->post('api/login', 'Api\Auth::login');
```

Route tersebut digunakan sebagai endpoint proses autentikasi.

---

### 3. Membuat Komponen Login VueJS

Membuat file:

```text
assets/js/components/Login.js
```

Komponen Login memiliki fitur:

- Form Username / Email
- Form Password
- Validasi Login menggunakan Axios
- Menyimpan status login ke Local Storage
- Redirect ke halaman Artikel setelah login berhasil

---

### 4. Konfigurasi Vue Router

Melakukan konfigurasi pada:

```text
assets/js/app.js
```

Penambahan meliputi:

- Route Home
- Route Login
- Route Artikel
- Meta `requiresAuth`
- Navigation Guards (`beforeEach`)

Navigation Guard digunakan untuk mengecek apakah pengguna sudah login sebelum mengakses halaman Artikel.

---

### 5. Menambahkan Menu Login dan Logout

File yang dimodifikasi:

```text
index.html
```

Menu navigasi dibuat dinamis menggunakan Vue.

Sebelum login:

- Beranda
- Kelola Artikel
- Login

Sesudah login:

- Beranda
- Kelola Artikel
- Logout

---

### 6. Menambahkan Tampilan Login

Menambahkan CSS pada:

```text
assets/css/style.css
```

Agar tampilan Login memiliki:

- posisi di tengah halaman
- tampilan modern
- tombol login
- pesan error ketika login gagal

---

## Pengujian

### Skenario A

Pengguna belum login.

Hasil:

- ketika membuka menu **Kelola Artikel**
- sistem menampilkan alert
- pengguna otomatis diarahkan ke halaman Login

✅ Berhasil

---

### Skenario B

Pengguna login menggunakan akun yang valid.

Hasil:

- Login berhasil
- Token tersimpan di Local Storage
- Halaman Artikel dapat diakses
- Menu Login berubah menjadi Logout

✅ Berhasil

---

## Hasil Praktikum

Praktikum ini berhasil mengimplementasikan sistem autentikasi pada aplikasi SPA menggunakan VueJS dan CodeIgniter 4.

Fitur yang berhasil dibuat:

- REST API Login
- Form Login menggunakan VueJS
- Axios untuk komunikasi API
- Penyimpanan status login menggunakan Local Storage
- Navigation Guards Vue Router
- Proteksi halaman admin
- Logout

---

## Dokumentasi

### Halaman Beranda

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/6717afd3-9ea1-4fed-b1e7-285395c65eb8" />

---

### Halaman Login

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/795bdf60-baf8-449b-9b02-d0856f38cec3" />

---

### Login Berhasil

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/ad886d8e-97c9-4eda-a928-2b1aae4d7cf6" />

---

### Halaman Kelola Artikel

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/1360861f-d4fe-4bc4-8e77-b63e146db3d1" />

---

### Logout

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/fbe8880b-a4a9-4146-b115-f94846eeeaca" />

---

## Kesimpulan

Pada praktikum ini berhasil dibuat sistem autentikasi sederhana menggunakan REST API CodeIgniter 4 dan VueJS. Navigation Guards pada Vue Router mampu membatasi akses ke halaman tertentu sehingga hanya pengguna yang telah melakukan login yang dapat mengakses halaman administrasi. Dengan memanfaatkan Axios dan Local Storage, proses autentikasi dapat berjalan secara dinamis tanpa melakukan reload halaman, sehingga aplikasi bekerja sebagai Single Page Application (SPA).

---

# Praktikum 14 - Keamanan API, Autentikasi Token, dan Axios Interceptors

## Deskripsi

Pada praktikum ini dilakukan implementasi keamanan pada REST API menggunakan **Token-Based Authentication** pada backend CodeIgniter 4 serta **Axios Interceptors** pada frontend VueJS. Selain itu diterapkan **API Filters** untuk melindungi endpoint dari akses ilegal sehingga hanya pengguna yang memiliki token yang dapat melakukan proses tambah, ubah, dan hapus data artikel.

---

## Tujuan Praktikum

- Memahami konsep Token-Based Authentication pada REST API.
- Mengimplementasikan API Filter pada CodeIgniter 4.
- Memahami penggunaan Axios Interceptors pada VueJS.
- Mengamankan komunikasi antara frontend dan backend menggunakan Authorization Token.

---

## Langkah-langkah Praktikum

### 1. Membuat API Authentication Filter

Membuat file baru:

```text
app/Filters/ApiAuthFilter.php
```

Filter digunakan untuk memeriksa Authorization Header dan memastikan request membawa Bearer Token yang valid.

---

### 2. Mendaftarkan Filter

Menambahkan filter pada file:

```text
app/Config/Filters.php
```

Kemudian menambahkan alias:

```php
'apiauth' => \App\Filters\ApiAuthFilter::class,
```

---

### 3. Mengamankan Endpoint REST API

Mengubah file:

```text
app/Config/Routes.php
```

Filter diterapkan pada endpoint:

- POST `/post`
- PUT `/post/{id}`
- DELETE `/post/{id}`

Sehingga hanya request yang memiliki token yang dapat mengakses endpoint tersebut.

---

### 4. Menambahkan Axios Interceptors

Melakukan konfigurasi pada file:

```text
assets/js/app.js
```

Axios Interceptors digunakan untuk:

- Mengambil token dari Local Storage.
- Menambahkan Authorization Header secara otomatis.
- Menangani response **401 Unauthorized**.
- Mengarahkan pengguna kembali ke halaman Login apabila token tidak valid.

---

### 5. Pengujian Menggunakan Postman

Melakukan request POST ke endpoint `/post` tanpa Authorization Header.

Hasil pengujian:

- Server menolak request.
- Response menampilkan **HTTP 401 Unauthorized**.
- Endpoint API berhasil diamankan.

---

### 6. Pengujian Melalui Browser

Melakukan login melalui aplikasi VueJS kemudian mencoba fitur:

- Tambah Artikel
- Ubah Artikel
- Hapus Artikel

Semua proses berhasil karena Axios Interceptors secara otomatis mengirimkan Bearer Token pada setiap request.

---

## Hasil Praktikum

Praktikum ini berhasil mengimplementasikan keamanan REST API menggunakan Token-Based Authentication pada CodeIgniter 4 dan Axios Interceptors pada VueJS. Endpoint yang dilindungi hanya dapat diakses oleh pengguna yang telah melakukan login dan memiliki token yang valid.

---

## Perbedaan Navigation Guards dan CodeIgniter Filters

| Navigation Guards | CodeIgniter Filters |
|-------------------|---------------------|
| Berjalan di sisi client. | Berjalan di sisi server. |
| Mengontrol perpindahan halaman SPA. | Mengamankan endpoint REST API. |
| Memeriksa status login dari Local Storage. | Memvalidasi Bearer Token pada request. |
| Tidak dapat mencegah akses API melalui Postman. | Dapat menolak request ilegal dengan status 401 Unauthorized. |

---

## Dokumentasi

### Error 401 Unauthorized

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/aeee66a8-7b33-4dd0-8a25-6c04b458fb8d" />

---

### Axios Interceptors

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/1797e543-e597-4d62-a06a-181afff377fc" />

<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/29274cf4-2704-4f13-ad0c-a4fd0636adab" />

---

## Kesimpulan

Pada praktikum ini berhasil diterapkan sistem keamanan REST API menggunakan Token-Based Authentication melalui CodeIgniter Filters dan Axios Interceptors. Penggunaan Navigation Guards hanya berfungsi membatasi akses pada sisi client, sedangkan CodeIgniter Filters memberikan perlindungan pada sisi server sehingga endpoint API tidak dapat diakses tanpa token yang valid.

---

### Terima Kasih
