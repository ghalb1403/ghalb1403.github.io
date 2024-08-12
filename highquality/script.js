document.addEventListener('DOMContentLoaded', function() {
  const cssFile = document.querySelector('link[rel="stylesheet"]');
  cssFile.href += '?v=' + new Date().getTime();

  const captions = [
    "این خونه رو خودت پر کن!",
    "مصرف بیش از اندازه نمک سبب بروز افزایش فشار خون به عنوان عامل خطر در بیماری‌های قلبی می‌شود، پس با به حداقل رساندن مصرف نمک سلامت قلب خود را تضمین کنید.",
    "این خونه رو خودت پر کن!",
    "این خونه رو خودت پر کن!",
    "افزایش وزن و چاقی ریسک فاکتور خیلی مهمی برای بسیاری از بیماری‌ها اعم از بیماری‌های قلبی است، به شکلی که چاقی را ام‌الامراض می‌دانند! کنترل وزن در محدوده مناسب، می‌تواند روش پیشگیری مناسبی باشد.",
    "این خونه رو خودت پر کن!",
    "از خوردن میوه‌های مفید غافل نشوید! چرا که مصرف به اندازه میوه، جایگزین خیلی مناسبی برای قندهای مصنوعی است.",
    "این خونه رو خودت پر کن!",
    "گوش دادن به موسیقی‌های آرامش‌بخش با کاهش میزان اضطراب به جلوگیری از افزایش بیش از حد ضربان قلب کمک می‌کنند و همچنین از طرفی با تاثیر بر سلامت روان در شادابی و سلامت جسم شما موثرند.",
    "مصرف مشروبات الکلی با افزایش بروز سکته‌های قلبی، فشار خون، تپش قلب و ... سبب بروز آسیب‌های جبران‌ناپذیری در قلب و سایر ارگان‌ها می‌شود. لذا با حذف آن از سلامت قلبتان حفاظت کنید.",
    "اکثر افراد یکی از مهمترین عوامل سلامتی را فراموش می‌کنند: خواب کافی و به اندازه، عامل موثری است که به سلامت و شادابی جسم، روح و روان شما بسیار کمک می‌کند.",
    "کنترل قند به عنوان عاملی جهت کاهش بروز یا کنترل دیابت و به دنبال آن ناراحتی‌های قلبی و بیماری‌های عروق، یکی از موارد مهم برای پیشگیری از این بیماری‌ها است.",
    "این خونه رو خودت پر کن!",
    "این خونه رو خودت پر کن!",
    "معنویت و نیایش روشی موثر برای تامین سلامت روح و روان و به دنبال آن سلامت جسمانی در پیشگیری از بروز بیماری‌های مزمن می‌باشد.",
    "این خونه رو خودت پر کن!",
    "افکار منفی و اضطراب علاوه بر اثرات مزمن بر روح و روان افراد، با کاهش سلامت جسمی آن‌ها، افزایش فعالیت سیستم التهابی و شرایط استرس اکسیداتیو را برای ارگانی مانند قلب فراهم می‌کند و همین امر موجب بروز طیف وسیعی از بیماری‌های قلبی عروقی می‌شود.",
    "عوارض مرگ‌بار مصرف دخانیات برای ارگان اساسی بدن بر کسی پوشیده نیست و مانند آن است که شرایط یک مرگ زودرس را برای خود فراهم کرده‌اید!",
    "یکی از موارد مهم در یک بارداری سالم، کنترل فشار خون مادر است که همین امر، سلامت مادر و جنین را تامین می‌کند و به پیش‌بینی احتمال ابتلای به فشار خون پس از بارداری کمک می‌کند. فشار خون بالا در دوره بارداری سبب تحمیل بار زیادی به قلب، برای تامین خون‌رسانی سراسر بدن می‌شود که این عوارض برای مادر و جنین ماندگار خواهند بود.",
    "این خونه رو خودت پر کن!",
    "مصرف مواد غذایی مفید باید به شکل صحیح صورت گیرد، برای مثال هنگام مصرف تخم‌مرغ به عنوان منبع سالم پروتئین، بهتر است بجای نیمرو کردن آن در روغن، به صورت آبپز آن را مصرف کنید.",
    "این خونه رو خودت پر کن!",
    "استفاده از روغن‌های گیاهی غیراشباع و حاوی امگا۳ بجای روغن های تراریخته و حاوی پالم به کاهش بروز بیماری‌های قلبی در درازمدت از طریق کاهش چربی خون و کاهش گرفتگی عروق کمک می‌کند.",
    "در نسل جدید و دنیای امروزه مصرف دخانیات در فرم‌ها و اشکال مختلف جوانان را تحریک می‌کند که یکی از انواع آن، سیگار‌های الکترونیک و  به اصطلاح ویپ می‌باشد. اینکه ویپ به نسبت سیگار معمولی مضرات کمتری دارد، به هیچ عنوان از نظر علمی ثابت نشده است.",
    "این خونه رو خودت پر کن!",
    "فعالیت و ورزش هوازی کافی در شکل های مختلف، اعم از دوچرخه‌سواری می‌تواند برای سلامت جسم ما مفید باشد و بروز بسیاری از بیماری‌های مزمن غیرواگیر را به حداقل برساند.",
    "از جزئیات غافل نشوید! در این طرح دانه‌های نمک به نماد مرگ شبیه‌سازی شده‌اند. مصرف بیش از اندازه نمک سبب بروز افزایش فشار خون به عنوان عامل خطر در بیماری‌های قلبی می‌باشد.",
    "این خونه رو خودت پر کن!",
    "انجام ورزش‌های منظم به صورت گروهی سبب افزایش انگیزه و تعهد نسبت به ورزش شده که در نهایت نتایج مثبت بسزایی در پیش‌گیری و کنترل بیماری‌های قلبی عروقی خواهد داشت.",
    "بالا بودن چربی خون، چاقی، دیابت و … سبب شکل‌گیری پلاک‌هایی در رگ‌های خونی شده که باعث تنگ شدن آن‌ها و در نهایت، بروز سکته‌های قلبی و مغزی می‌شود.",
    "مصرف شیرینی، شکلات و سایر مواد غذایی که حاوی مقادیر بالایی قند ساده هستند، سبب افزایش ریسک ابتلا به بیماری‌های قلبی می‌شوند و احتمال بروز سکته قلبی را افزایش می‌دهند. با کاهش مصرف این مواد غذایی، به سلامت خود کمک کنید.",
    "این خونه رو خودت پر کن!",
    "قندهای مصنوعی در انواع خوراکی‌ها مانند نوشابه‌ها، به فراوانی وجود دارند. قند هر قوطی نوشابه گازدار، برابر با 10 قاشق غذاخوری شکر است. متاسفانه امروزه شاهد افزایش مصرف آن در کنار غذا هستیم و همین عادت بد موجب افزایش قند خون، افزایش فشار و به دنبال آن افزایش بروز بیماری‌های قلبی خواهد شد.",
    "در بسیاری از افراد شاهد بی‌نظمی و حتی فراموشی در ساعات مصرف داروهایشان هستیم، و همین نکته به ظاهر ساده سبب کاهش اثر گذاری دارو و پیشرفت استیج بیماری می‌شود. پس برای پیشگیری از پیشرفت بیماری قلبی خود، داروهایتان را منظم و در زمان مقرر خود مصرف کنید.",
    "این خونه رو خودت پر کن!",
    "این خونه رو خودت پر کن!",
    "انجام ورزش‌های هوازی مانند صخره‌نوردی باعث تقویت توان قلبی عروقی می‌شود.",
    "بالا بودن فشار خون، رابطه مستقیمی با بروز انواع بیماری‌های قلبی و عروقی دارد، با اندازه‌گیری منظم فشار خون و کنترل آن با به‌کارگیری سبک زندگی صحیح و مصرف داروهای مناسب، گام بلندی به سوی سلامتی بردارید.",
    "انجام ورزش‌هایی مانند دویدن به مدت حدود ۱۰ دقیقه در روز، خطر بروز بیماری‌های قلبی عروقی را به طور چشمگیری کاهش می‌دهد.",
    "افکار منفی که سبب بروز احساساتی از قبیل خشم، نگرانی و افسردگی می‌شوند، باعث تشدید بیماری های قلبی و همین‌طور افزایش ریسک بروز آن‌ها می‌شوند.",
    "مصرف روزانه هشت لیوان آب میتواند نقش موثری بر سلامت قلب و عروق شما داشته باشد.",
    "کمبود ویتامین D می‌تواند یکی از عوامل بروز بیماری های قلبی باشد، با مصرف مواد غذایی حاوی ویتامین D مانند شیر و انواع ماهی‌ها و همچنین استفاده از مکمل‌ها و قرار گرفتن در معرض نور خورشید، کمبود این ویتامین را در بدن جبران کنید.",
    "مصرف زیاد غذاهای چرب از جمله کله پاچه می‌تواند به انسداد عروق و مشکلات قلبی منجر شود.",
    "اختصاص زمان‌هایی به مدیتیشن و تمرینات تمرکز، می‌تواند باعث تقویت آرامش شده و استرس را کاهش دهد و به کنترل بیماری‌های قلبی کمک کند.",
    "آلودگی هوا باعث افزایش التهاب در بدن می‌شود که این وضعیت خطر ابتلا به بیماری‌های قلبی، از جمله سکته قلبی را افزایش می‌دهد. پس با استفاده از ماسک مناسب و عدم ترک منزل در زمان افزایش آلودگی هوا، به سلامت خود کمک کنید.",
    "مراجعه به روانشناس از طریق کاهش استرس و اضطراب و همچنین توصیه‌های رفتاری مناسب می‌تواند نقش موثری در سلامت قلبی داشته باشد.",
    "چکاپ‌های پزشکی منظم باعث تشخیص زودهنگام بیماری‌های قلبی و مدیریت مناسب این بیماری‌ها شده و سبب افزایش طول عمر و کیفیت زندگی می‌شود.",
    "کشیدن قلیان تاثیرات مخربی بر سیستم‌های مختلف بدن از جمله سیستم قلبی عروقی دارد و می‌تواند سبب افزایش فشار خون، کاهش خون‌رسانی به بافت‌های مختلف و نارسایی قلبی شود.",
    "این خونه رو خودت پر کن!",
    "این خونه رو خودت پر کن!",
    "این خونه رو خودت پر کن!",
    "استفاده از گوشت سفید مانند مرغ و ماهی به جای گوشت قرمز، با کاهش سطح کلسترول و چربی های اشباع به بهبود عملکرد قلب کمک می‌کند.",
    "استفاده از پله به جای آسانسور، عضلات قلب را تقویت می‌کند و گردش خون را بهبود می‌بخشد، این عادت ساده، فشار خون را کاهش داده و خطر بیماری‌های قلبی را کم می‌کند.",
    "کوه‌نوردی به بهبود ظرفیت تنفسی، کاهش استرس و کاهش فشار خون کمک می‌کند که در نهایت منجر به بهبود سلامت قلب می‌شود.",
    "این خونه رو خودت پر کن!",
    "این خونه رو خودت پر کن!",
    "گنجاندن مقادیر کافی سبزیجات در رژیم غذایی روزانه باعث کاهش فشار خون، کاهش کلسترول و بهبود عملکرد عروق شده و سبب کاهش خطر بروز بیماری های قلبی می‌شود.",
    "این خونه رو خودت پر کن!",
    "مصرف شیرینی‌ها و غذاهای حاوی قندهای افزودنی می‌تواند تاثیرات منفی زیادی بر سلامت قلب و عروق داشته باشد.",
    "این خونه رو خودت پر کن!",
    "مصرف سیگار باعث تنگی عروق، افزایش فشار خون، کاهش سطح اکسیژن خون و در نتیجه فشار بر عضله قلب می‌شود و به همین علت افراد سیگاری ۲ تا ۴ برابر بقیه افراد، به بیماری‌های قلبی عروقی دچار می‌شوند.",
    "این خونه رو خودت پر کن!",
    "این خونه رو خودت پر کن!"
  ];

  const grid = document.querySelector('.grid');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  const closeModal = () => modal.style.display = 'none';

  grid.addEventListener('click', function(event) {
    if (event.target.classList.contains('cell')) {
      const index = Array.from(grid.children).indexOf(event.target);
      modal.style.display = 'flex';
      modalImg.src = event.target.style.backgroundImage.slice(5, -2);
      captionText.textContent = captions[index];
    }
  });

  document.querySelector('.close').addEventListener('click', closeModal);

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation();
  });
});

window.onload = function() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
};