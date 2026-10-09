# معلم بناء صنعاء

موقع عربي مستقل لأعمال البناء في صنعاء، مبني باستخدام Next.js وTypeScript وTailwind CSS.

## التشغيل محليًا

يتطلب Node.js 20 أو أحدث.

```bash
npm install
npm run dev
```

افتح http://localhost:3000

## الاختبارات والبناء

```bash
npm run typecheck
npm run build
```

## رفع GitHub

1. أنشئ مستودعًا **جديدًا وفارغًا** في GitHub.
2. فك ضغط ZIP وافتح الطرفية داخل مجلد المشروع.
3. نفذ:

```bash
git init
git add .
git commit -m "Initial construction website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

استبدل USERNAME وREPOSITORY ببيانات المستودع الجديد.

## نشر Vercel

1. من Vercel اختر Add New → Project ثم استورد مستودع GitHub الجديد.
2. سيُكتشف إطار Next.js تلقائيًا؛ اترك Build Command على `next build`.
3. **قبل النشر العام** أضف متغير البيئة `NEXT_PUBLIC_SITE_URL` بالقيمة `https://your-domain.com`، مع استبدالها بعنوان موقعك الفعلي، دون شرطة مائلة أخيرة.
4. انشر الموقع. عند تغيير الدومين، حدّث المتغير وأعد النشر لتحديث Canonical وsitemap وSchema.

## ملاحظات مهمة

- أماكن الصور فارغة ومجهزة بصريًا؛ لا توجد صور أعمال مزعومة. اقرأ public/images/README.md لأسماء الصور المقترحة وطريقة ربطها.
- رقم الاتصال الوحيد: 770831014.
- لا توجد شهادات أو تقييمات أو عناوين شارع أو سنوات خبرة مختلقة.
- لا يحتاج المشروع قاعدة بيانات أو مفاتيح API.
- لا تعتبر نتائج الاختبارات المحلية بديلًا عن فحص PageSpeed Insights على رابط النشر الفعلي.
- رابط `example.com` الافتراضي **مؤقت**، ويجب تعيين `NEXT_PUBLIC_SITE_URL` قبل إطلاق الموقع رسميًا لضمان صحة الروابط الأساسية.


## إضافة 36 صورة
راجع public/images/README.md. كل الأماكن فارغة، ورفع صورة باسم build-01.webp إلى build-36.webp في public/images سيجعلها تظهر تلقائيًا.
