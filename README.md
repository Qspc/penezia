# PENEZIA Website

Website resmi **PENEZIA - Percetakan Sahabat Custom Purwakarta**.

Website ini dibuat menggunakan **Next.js** dan seluruh aset (gambar, logo, dan informasi kontak) dapat diperbarui dengan mudah tanpa perlu mengubah banyak kode.

---

# Panduan Mengubah Konten Website

## 1. Mengubah Kontak, WhatsApp, Email, dan Media Sosial

Lokasi file:

```
app/components/environment/contact.tsx
```

Di dalam file tersebut Anda dapat mengubah:

- Nomor WhatsApp
- Instagram
- TikTok

> Setelah mengubah data, simpan file lalu lakukan proses **Build & Deploy** agar perubahan tampil di website.

---

## 2. Mengganti Gambar

Seluruh gambar berada di folder:

```
public/
```

Di dalamnya terdapat beberapa folder sesuai kebutuhan, misalnya:

```
public/
│
├── hero/
├── logo/
├── product/
├── gallery/
├── team/
└── ...
```

Cara mengganti gambar:

1. Masuk ke folder yang sesuai.
2. Ganti gambar lama dengan gambar baru.
3. Gunakan **nama file yang sama** agar tidak perlu mengubah kode.

Contoh:

```
public/logo/logo-utama.png
```

Jika ingin mengganti logo, cukup timpa file tersebut dengan logo baru menggunakan nama file yang sama.

---

## 3. Mengubah Metadata Website (SEO)

Lokasi:

```
app/layout.tsx
```

Di sini dapat diubah informasi seperti:

- Judul Website
- Deskripsi Website
- Keyword Google
- Informasi Open Graph (Preview saat dibagikan ke WhatsApp/Facebook)

Contoh:

```ts
title:
description:
keywords:
```

---

## 4. Mengubah Produk

Lokasi data produk:

```
app/components/environment/
```

atau pada file yang berkaitan dengan daftar produk.

Di sini dapat mengubah:

- Nama produk
- Deskripsi
- Harga (jika digunakan)
- Gambar produk

---

## 5. Mengubah Testimoni

Lokasi:

```
app/components/environment/
```

File testimoni berisi:

- Nama pelanggan
- Isi testimoni
- Foto (jika ada)

---

## 6. Mengubah FAQ

Lokasi:

```
app/components/environment/
```

Di sini dapat menambah, menghapus, atau mengubah pertanyaan dan jawaban yang muncul pada halaman FAQ.

---

## 7. Mengubah Link Navigasi

Lokasi:

```
app/components/
```

Biasanya berada pada komponen:

- Navbar
- Footer

---

# Struktur Folder Penting

```
app/
│
├── components/
│   ├── environment/
│   │     ├── contact.tsx
│   │     ├── product.ts
│   │     ├── testimonial.ts
│   │     └── faq.ts
│   │
│   ├── navbar/
│   ├── footer/
│   └── ...
│
public/
│
├── hero/
├── logo/
├── gallery/
├── product/
└── ...
```

---

# Tips

✅ Gunakan ukuran gambar yang tidak terlalu besar agar website tetap cepat.

✅ Jangan mengubah nama folder.

✅ Jika hanya mengganti gambar, sebaiknya gunakan nama file yang sama.

✅ Setelah melakukan perubahan, lakukan proses **Build** dan **Deploy** agar perubahan muncul di website.

---

# Catatan

Apabila terjadi error setelah melakukan perubahan, kembalikan file seperti semula atau hubungi developer.
