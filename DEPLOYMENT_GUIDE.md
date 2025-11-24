# Deployment Guide - tutorialeks.com

## Преглед на deployment процеса

Този сайт ще бъде хостван на **GitHub Pages** с custom domain **tutorialeks.com**.

## Стъпка 1: Подготовка на GitHub Repository

### 1.1 Създаване на repository
```bash
# Ако все още не си създал repo
git init
git add .
git commit -m "Initial commit - TutoriAleks website"

# Създай repo в GitHub с име: tutorialeks.github.io
# След това:
git remote add origin https://github.com/YOUR_USERNAME/tutorialeks.github.io.git
git branch -M main
git push -u origin main
```

### 1.2 Активиране на GitHub Pages
1. Отиди в Settings на repository-то
2. Навигирай до "Pages" в лявото меню
3. В "Source" избери:
   - Branch: `main`
   - Folder: `/ (root)`
4. Кликни "Save"
5. Сайтът ще е достъпен на: `https://YOUR_USERNAME.github.io`

## Стъпка 2: Закупуване и настройка на домейн

### 2.1 Закупуване на tutorialeks.com
Препоръчвани регистратори:
- **Namecheap** (препоръчвам)
- **GoDaddy**
- **Google Domains**
- **Cloudflare Registrar**

### 2.2 DNS настройки

След закупуване на домейна, добави следните DNS записи:

#### A Records (за root domain)
```
Type: A
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.111.153
TTL: Automatic
```

#### CNAME Record (за www subdomain)
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
TTL: Automatic
```

### 2.3 Настройка в GitHub

1. Създай файл `CNAME` в root на проекта:
```bash
echo "tutorialeks.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. В GitHub Settings → Pages:
   - В "Custom domain" въведи: `tutorialeks.com`
   - Кликни "Save"
   - ✓ Включи "Enforce HTTPS" (след като DNS се пропагира)

### 2.4 Изчакване на DNS пропагация
- DNS промените отнемат 24-48 часа
- Можеш да проверяваш статуса с: https://dnschecker.org

## Стъпка 3: SSL/HTTPS настройка

GitHub Pages автоматично предоставя безплатен SSL сертификат от Let's Encrypt.

След DNS пропагация:
1. Отиди в Settings → Pages
2. Включи "Enforce HTTPS"
3. Изчакай 10-15 минути за генериране на сертификата

## Стъпка 4: Финални проверки

### 4.1 Тестване на URLs
Провери че всички работят:
- ✓ `http://tutorialeks.com` → пренасочва към `https://tutorialeks.com`
- ✓ `http://www.tutorialeks.com` → пренасочва към `https://tutorialeks.com`
- ✓ `https://tutorialeks.com/bg/learners/` → работи коректно
- ✓ Всички iframe компоненти се зареждат

### 4.2 Проверка на Google Forms
- Тествай двата формуляра
- Провери че получаваш нотификации
- Провери записването в Google Sheets

### 4.3 Mobile тестване
Тествай на различни устройства:
- 📱 Mobile (iOS/Android)
- 📱 Tablet
- 💻 Desktop (различни браузъри)

## Стъпка 5: SEO и Analytics (опционално)

### 5.1 Google Search Console
1. Отиди на https://search.google.com/search-console
2. Добави property за `tutorialeks.com`
3. Верифицирай ownership (чрез DNS или HTML file)
4. Submit sitemap (ще създадем по-късно)

### 5.2 Google Analytics (опционално)
```html
<!-- Добави в <head> на всички страници -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5.3 Създаване на sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tutorialeks.com/</loc>
    <lastmod>2025-11-24</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tutorialeks.com/bg/learners/</loc>
    <lastmod>2025-11-24</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>
```

### 5.4 Създаване на robots.txt
```
User-agent: *
Allow: /

Sitemap: https://tutorialeks.com/sitemap.xml
```

## Стъпка 6: Continuous Deployment

GitHub Pages автоматично deploy-ва при всеки push:

```bash
# Направи промени
git add .
git commit -m "Update content"
git push

# Сайтът ще се обнови автоматично след 1-2 минути
```

## Troubleshooting

### Проблем: DNS не се пропагира
**Решение:** Изчакай 24-48 часа. Провери с `dig tutorialeks.com` или https://dnschecker.org

### Проблем: HTTPS не работи
**Решение:** 
1. Провери че DNS е пропагиран
2. Изчакай 10-15 минути след включване на "Enforce HTTPS"
3. Опитай да изключиш и включиш отново "Enforce HTTPS"

### Проблем: 404 грешка на подстраници
**Решение:** Провери че файловете са в правилните директории и че пътищата са коректни

### Проблем: Iframes не се зареждат
**Решение:** Провери CORS настройките и че пътищата към iframe файловете са коректни

## Backup и версиониране

GitHub автоматично пази история на всички промени:
```bash
# Виж история
git log

# Върни се към предишна версия
git checkout COMMIT_HASH

# Създай нов branch за експерименти
git checkout -b experimental-feature
```

## Мониторинг и поддръжка

### Редовни проверки:
- ✓ Проверявай Google Forms submissions
- ✓ Следи Google Analytics (ако е настроен)
- ✓ Тествай сайта на различни устройства
- ✓ Обновявай съдържанието редовно

### Performance оптимизация:
- Компресирай изображения преди upload
- Минимизирай CSS/JS файлове (опционално)
- Използвай CDN за по-бързо зареждане (опционално)

## Следващи стъпки

След успешен deployment:
1. ✅ Настрой Google Forms и тествай
2. ✅ Добави Google Analytics (опционално)
3. ✅ Submit sitemap в Google Search Console
4. ✅ Започни маркетинг кампании
5. ✅ Събирай feedback от потребители

## Полезни ресурси

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Checker](https://dnschecker.org)
- [Google Search Console](https://search.google.com/search-console)

---

**Важно:** След deployment, не забравяй да актуализираш Google Forms URLs в `bg/learners/index.html`!
