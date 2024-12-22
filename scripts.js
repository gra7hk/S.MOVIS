*JavaScript (التفاعل - اختياري):*
javascript
// يمكن إضافة تفاعل هنا لاحقًا إذا كنت بحاجة إلى وظائف إضافية مثل تشغيل الفيديو أو إضافة التفاعل
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("تم الضغط على زر مشاهدة الفيلم!");
    });
});
```