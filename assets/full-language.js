/* v14 唯一语言控制器：中文恢复原始中英对照；其余语言整页翻译；随时可切回中文且内容完整恢复。 */
(function(){
  var KEY='xinyi-health-language-v14';
  ['xinyi-health-language-v3','xinyi-health-language-v5','xinyi-health-language-v9','xinyi-health-language-v10'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
  var langs=[['zh-CN','中文','Chinese'],['en','English','English'],['es','Español','Spanish'],['ar','العربية','Arabic'],['hi','हिन्दी','Hindi'],['pt','Português','Portuguese'],['fr','Français','French'],['ru','Русский','Russian'],['ja','日本語','Japanese'],['de','Deutsch','German'],['ko','한국어','Korean'],['zh-TW','繁體中文','Traditional Chinese']];
  var T={
    en:{labels:['ABOUT US','SERVICE PHILOSOPHY','MEDICAL NETWORK','SERVICE JOURNEY','HEALTH SERVICES','TCM HERITAGE','WELLNESS DESTINATIONS','TRADITION & WELLNESS','ONE-TO-ONE CONSULTATION'],hero:'Full-Cycle Health Management Ecosystem',desc:'A cross-border, full-cycle health management ecosystem for global high-net-worth clients.',cta:'Book a Private Consultation',q:['Service Philosophy','Service Journey','Six Wellness Destinations'],h:['Your Trusted Full-Cycle Health Concierge','Precision · Integrity · Harmony','Assess First, Then Match the Right System','Every Step Has an Answer','Precision Medicine Meets Quality Living','Bringing TCM Culture Back to Life','Six Wellness Destinations · One City, One Scene, One Plan','From Treatment to Wellness · Return to a Better Life','Health Management Starts with a Conversation'],body:'Professional care, bilingual coordination, and continuous health support across every stage.',city:['Beijing · Core Hub','Shanghai · International Gateway','Guangzhou · Southern Hub'],step:['Pre-Consultation','During Care','Follow-Up'],svc:['Specialty Care','Premium Check-ups & Imaging','Postoperative Rehabilitation','TCM Constitution Care','Quality of Life','Long-Term Health Records'],tag:['Assessment','TCM Wellness','Forest Healing','Lakeside Retreat','Premium Stay','Companionship'],contact:'Tap the button to start a one-on-one health consultation.',soul:['Precision','Integrity','Harmony']},
    es:{labels:['SOBRE NOSOTROS','FILOSOFÍA DEL SERVICIO','RED MÉDICA','RECORRIDO DEL SERVICIO','SERVICIOS DE SALUD','HERENCIA DE LA MEDICINA CHINA','DESTINOS DE BIENESTAR','TRADICIÓN Y BIENESTAR','CONSULTA INDIVIDUAL'],hero:'Ecosistema de gestión integral de la salud',desc:'Un ecosistema transfronterizo de gestión de la salud para clientes de alto patrimonio.',cta:'Reservar consulta privada',q:['Filosofía del servicio','Recorrido del servicio','Seis destinos de bienestar'],h:['Su concierge de salud de confianza','Precisión · Integridad · Armonía','Evaluar primero y elegir el sistema adecuado','Cada etapa tiene una respuesta','Medicina de precisión y calidad de vida','La medicina china en la vida diaria','Seis destinos de bienestar · Una ciudad, una escena, un plan','Del tratamiento al bienestar · Hacia una vida mejor','La gestión de la salud empieza con una conversación'],body:'Atención profesional, coordinación bilingüe y apoyo continuo durante todo el recorrido de salud.',city:['Pekín · Centro principal','Shanghái · Puerta internacional','Cantón · Centro del sur'],step:['Antes de la consulta','Durante la atención','Seguimiento'],svc:['Atención especializada','Chequeos e imágenes premium','Rehabilitación posoperatoria','Cuidado constitucional chino','Calidad de vida','Historiales de salud'],tag:['Evaluación','Bienestar chino','Sanación forestal','Retiro junto al lago','Estancia premium','Acompañamiento'],contact:'Pulse el botón para iniciar una consulta de salud.',soul:['Precisión','Integridad','Armonía']},
    ar:{labels:['من نحن','فلسفة الخدمة','الشبكة الطبية','رحلة العميل','الخدمات الصحية','تراث الطب الصيني','وجهات العافية','التقاليد والعافية','استشارة فردية'],hero:'منظومة إدارة الصحة المتكاملة',desc:'منظومة عابرة للحدود لإدارة الصحة للعملاء ذوي الملاءة المالية.',cta:'احجز استشارة خاصة',q:['فلسفة الخدمة','رحلة العميل','ست وجهات للعافية'],h:['مرافقك الصحي الموثوق','الدقة · النزاهة · الانسجام','نقيّم أولاً ثم نختار النظام المناسب','لكل مرحلة إجابة','الطب الدقيق وجودة الحياة','الثقافة الطبية الصينية في الحياة اليومية','ست وجهات للعافية · مدينة ومشهد وخطة','من العلاج إلى العافية · نحو حياة أفضل','إدارة الصحة تبدأ بحوار'],body:'رعاية مهنية وتنسيق ثنائي اللغة ودعم صحي مستمر في كل مرحلة.',city:['بكين · المركز الرئيسي','شنغهاي · البوابة الدولية','قوانغتشو · مركز الجنوب'],step:['قبل الاستشارة','أثناء الرعاية','المتابعة'],svc:['رعاية متخصصة','فحوصات وتصوير متقدم','إعادة التأهيل بعد الجراحة','رعاية الطب الصيني','جودة الحياة','السجلات الصحية طويلة المدى'],tag:['التقييم','العافية الصينية','العلاج بالغابات','استشفاء بجانب البحيرة','إقامة مميزة','المرافقة'],contact:'اضغط لبدء استشارة صحية فردية.',soul:['الدقة','النزاهة','الانسجام']},
    hi:{labels:['हमारे बारे में','सेवा दर्शन','चिकित्सा नेटवर्क','सेवा यात्रा','स्वास्थ्य सेवाएँ','चीनी चिकित्सा विरासत','वेलनेस गंतव्य','परंपरा और वेलनेस','एक-से-एक परामर्श'],hero:'समग्र स्वास्थ्य प्रबंधन पारिस्थितिकी तंत्र',desc:'दुनिया भर के उच्च-निवल-मूल्य ग्राहकों के लिए सीमा-पार स्वास्थ्य प्रबंधन सेवा।',cta:'निजी परामर्श बुक करें',q:['सेवा दर्शन','सेवा यात्रा','छह वेलनेस गंतव्य'],h:['आपका विश्वसनीय स्वास्थ्य संरक्षक','सटीकता · ईमानदारी · सामंजस्य','पहले मूल्यांकन, फिर सही प्रणाली','हर चरण में एक उत्तर','सटीक चिकित्सा और बेहतर जीवन','चीनी चिकित्सा संस्कृति को जीवन में लाना','छह वेलनेस गंतव्य · एक शहर, एक दृश्य, एक योजना','उपचार से वेलनेस तक · बेहतर जीवन की ओर','स्वास्थ्य प्रबंधन एक बातचीत से शुरू'],body:'हर चरण में पेशेवर देखभाल, द्विभाषी समन्वय और निरंतर स्वास्थ्य सहायता।',city:['बीजिंग · मुख्य केंद्र','शंघाई · अंतरराष्ट्रीय द्वार','ग्वांगझोउ · दक्षिणी केंद्र'],step:['परामर्श से पहले','देखभाल के दौरान','अनुवर्ती देखभाल'],svc:['विशेषज्ञ देखभाल','प्रीमियम जांच और इमेजिंग','ऑपरेशन के बाद पुनर्वास','चीनी चिकित्सा देखभाल','जीवन गुणवत्ता','दीर्घकालिक स्वास्थ्य रिकॉर्ड'],tag:['मूल्यांकन','चीनी वेलनेस','वन उपचार','झील किनारे विश्राम','प्रीमियम प्रवास','साथ'],contact:'एक-से-एक स्वास्थ्य परामर्श शुरू करने के लिए बटन दबाएँ।',soul:['सटीकता','ईमानदारी','सामंजस्य']},
    pt:{labels:['SOBRE NÓS','FILOSOFIA DO SERVIÇO','REDE MÉDICA','JORNADA DO SERVIÇO','SERVIÇOS DE SAÚDE','HERANÇA DA MEDICINA CHINESA','DESTINOS DE BEM-ESTAR','TRADIÇÃO E BEM-ESTAR','CONSULTA INDIVIDUAL'],hero:'Ecossistema de gestão integral da saúde',desc:'Um ecossistema transfronteiriço de gestão da saúde para clientes de alto patrimônio.',cta:'Agendar consulta privada',q:['Filosofia do serviço','Jornada do serviço','Seis destinos de bem-estar'],h:['Seu concierge de saúde de confiança','Precisão · Integridade · Harmonia','Avaliar primeiro e escolher o sistema certo','Cada etapa tem uma resposta','Medicina de precisão e qualidade de vida','A medicina chinesa na vida diária','Seis destinos de bem-estar · Uma cidade, uma cena, um plano','Do tratamento ao bem-estar · Rumo a uma vida melhor','A gestão da saúde começa com uma conversa'],body:'Cuidado profissional, coordenação bilíngue e apoio contínuo em todas as etapas.',city:['Pequim · Centro principal','Xangai · Porta internacional','Cantão · Centro do sul'],step:['Antes da consulta','Durante o cuidado','Acompanhamento'],svc:['Cuidado especializado','Check-ups e imagens premium','Reabilitação pós-operatória','Cuidado pela medicina chinesa','Qualidade de vida','Registros de saúde'],tag:['Avaliação','Bem-estar chinês','Cura na floresta','Retiro à beira do lago','Estadia premium','Acompanhamento'],contact:'Clique para iniciar uma consulta de saúde individual.',soul:['Precisão','Integridade','Harmonia']},
    fr:{labels:['À PROPOS','PHILOSOPHIE DU SERVICE','RÉSEAU MÉDICAL','PARCOURS DE SERVICE','SERVICES DE SANTÉ','HÉRITAGE DE LA MÉDECINE CHINOISE','DESTINATIONS BIEN-ÊTRE','TRADITION ET BIEN-ÊTRE','CONSULTATION INDIVIDUELLE'],hero:'Écosystème de gestion globale de la santé',desc:'Un écosystème transfrontalier de gestion de la santé pour les clients fortunés.',cta:'Réserver une consultation privée',q:['Philosophie du service','Parcours de service','Six destinations bien-être'],h:['Votre concierge santé de confiance','Précision · Intégrité · Harmonie','Évaluer d’abord puis choisir le bon système','Chaque étape a sa réponse','Médecine de précision et qualité de vie','La médecine chinoise au quotidien','Six destinations bien-être · Une ville, une scène, un plan','Du traitement au bien-être · Vers une vie meilleure','La gestion de la santé commence par un échange'],body:'Une prise en charge professionnelle, une coordination bilingue et un accompagnement continu.',city:['Pékin · Centre principal','Shanghai · Porte internationale','Canton · Pôle du Sud'],step:['Avant la consultation','Pendant les soins','Suivi'],svc:['Soins spécialisés','Bilans et imagerie premium','Rééducation postopératoire','Médecine chinoise','Qualité de vie','Dossiers de santé'],tag:['Évaluation','Bien-être chinois','Forêt thérapeutique','Retraite au bord du lac','Séjour premium','Accompagnement'],contact:'Cliquez pour commencer une consultation de santé individuelle.',soul:['Précision','Intégrité','Harmonie']},
    ru:{labels:['О НАС','ФИЛОСОФИЯ СЕРВИСА','МЕДИЦИНСКАЯ СЕТЬ','ПУТЬ КЛИЕНТА','УСЛУГИ ЗДОРОВЬЯ','НАСЛЕДИЕ КИТАЙСКОЙ МЕДИЦИНЫ','ОЗДОРОВИТЕЛЬНЫЕ НАПРАВЛЕНИЯ','ТРАДИЦИИ И ОЗДОРОВЛЕНИЕ','ЛИЧНАЯ КОНСУЛЬТАЦИЯ'],hero:'Экосистема управления здоровьем полного цикла',desc:'Трансграничная экосистема управления здоровьем для состоятельных клиентов.',cta:'Записаться на консультацию',q:['Философия сервиса','Путь клиента','Шесть оздоровительных направлений'],h:['Ваш надёжный медицинский консультант','Точность · честность · гармония','Сначала оценка, затем подбор системы','На каждом этапе есть ответ','Точная медицина и качество жизни','Китайская медицина в повседневной жизни','Шесть оздоровительных направлений · Один город, одна сцена, один план','От лечения к оздоровлению · К лучшей жизни','Управление здоровьем начинается с разговора'],body:'Профессиональная помощь, двуязычная координация и постоянная поддержка на каждом этапе.',city:['Пекин · Главный центр','Шанхай · Международные ворота','Гуанчжоу · Южный центр'],step:['До консультации','Во время лечения','Наблюдение'],svc:['Профильная помощь','Премиальные обследования','Послеоперационная реабилитация','Китайская медицина','Качество жизни','Долгосрочные записи'],tag:['Оценка','Китайское оздоровление','Лесная терапия','Отдых у озера','Премиальное проживание','Сопровождение'],contact:'Нажмите, чтобы начать индивидуальную консультацию.',soul:['Точность','Честность','Гармония']},
    ja:{labels:['私たちについて','サービス理念','医療ネットワーク','サービスプロセス','ヘルスサービス','中医学の伝統','ウェルネス拠点','伝統とウェルネス','個別相談'],hero:'フルサイクルの健康管理サービスエコシステム',desc:'世界の富裕層に向けた国境を越えた健康管理サービスです。',cta:'個別相談を予約する',q:['サービス理念','サービスプロセス','6つのウェルネス拠点'],h:['信頼できる健康コンシェルジュ','精密 · 誠実 · 調和','まず評価し最適な体系へ','すべての段階に答えを','精密医療と豊かな暮らし','中医学の文化を暮らしへ','6つのウェルネス拠点 · 一つの都市、一つの計画','治療からウェルネスへ · より良い暮らしへ','健康管理を一度の対話から'],body:'専門的なケア、バイリンガルの調整、継続的な健康サポートを各段階で提供します。',city:['北京 · 中核拠点','上海 · 国際ゲートウェイ','広州 · 南方拠点'],step:['診前','診中','診後'],svc:['専門診療','プレミアム健診・画像診断','術後リハビリ','中医学体質ケア','生活の質','長期健康記録'],tag:['評価','中医養生','森林療法','湖畔リトリート','プレミアム滞在','コンシェルジュ'],contact:'ボタンから個別の健康相談を始めてください。',soul:['精確さ','誠実さ','調和']},
    de:{labels:['ÜBER UNS','SERVICEPHILOSOPHIE','MEDIZINISCHES NETZWERK','SERVICEWEG','GESUNDHEITSDIENSTE','TRADITIONELLE CHINESISCHE MEDIZIN','WELLNESSZIELE','TRADITION UND WELLNESS','PERSÖNLICHE BERATUNG'],hero:'Ganzheitliches Gesundheitsmanagement',desc:'Ein grenzüberschreitendes Gesundheitsmanagement für vermögende Kunden.',cta:'Persönliche Beratung buchen',q:['Servicephilosophie','Serviceweg','Sechs Wellnessziele'],h:['Ihr vertrauenswürdiger Gesundheitsbegleiter','Präzision · Integrität · Harmonie','Erst bewerten, dann das passende System wählen','Jeder Schritt hat eine Antwort','Präzisionsmedizin und Lebensqualität','Chinesische Medizin im Alltag','Sechs Wellnessziele · Eine Stadt, eine Szene, ein Plan','Von Behandlung zu Wellness · Zu einem besseren Leben','Gesundheitsmanagement beginnt mit einem Gespräch'],body:'Professionelle Betreuung, zweisprachige Koordination und kontinuierliche Unterstützung in jeder Phase.',city:['Peking · Hauptzentrum','Shanghai · Internationales Tor','Guangzhou · Zentrum des Südens'],step:['Vor der Beratung','Während der Behandlung','Nachsorge'],svc:['Spezialversorgung','Premium-Check-ups und Bildgebung','Postoperative Rehabilitation','Chinesische Medizin','Lebensqualität','Langzeit-Gesundheitsakten'],tag:['Beurteilung','Chinesisches Wellness','Waldtherapie','See-Retreat','Premium-Aufenthalt','Begleitung'],contact:'Klicken Sie für eine persönliche Gesundheitsberatung.',soul:['Präzision','Integrität','Harmonie']},
    ko:{labels:['회사 소개','서비스 철학','의료 네트워크','서비스 여정','건강 서비스','중의학 전통','웰니스 거점','전통과 웰니스','1:1 상담'],hero:'전 주기 건강관리 서비스 생태계',desc:'전 세계 고액자산가를 위한 국경 간 건강관리 서비스 생태계입니다.',cta:'1:1 상담 예약',q:['서비스 철학','서비스 여정','6대 웰니스 거점'],h:['신뢰할 수 있는 건강 컨시어지','정밀 · 진정성 · 조화','먼저 평가하고 맞춤 시스템을 연결합니다','모든 단계에 답이 있습니다','정밀 의료와 더 나은 삶','중의학 문화를 일상으로','6대 웰니스 거점 · 한 도시, 한 장면, 한 계획','치료에서 웰니스까지 · 더 나은 삶으로','건강 관리를 한 번의 대화로 시작'],body:'전 단계에서 전문 케어, 이중언어 조율, 지속적인 건강 지원을 제공합니다.',city:['베이징 · 핵심 거점','상하이 · 국제 관문','광저우 · 남부 거점'],step:['상담 전','진료 중','사후관리'],svc:['전문 진료','프리미엄 검진·영상','수술 후 재활','중의학 체질 관리','삶의 질','장기 건강 기록'],tag:['평가','중의 웰니스','숲 치유','호숫가 휴식','프리미엄 체류','동행'],contact:'버튼을 눌러 1:1 건강 상담을 시작하세요.',soul:['정밀함','정직함','조화']},
    'zh-TW':{labels:['關於我們','服務內核','醫療網絡','服務流程','健康服務','中醫文化傳承','康養基地','傳統與康養','一對一諮詢'],hero:'全週期健康管理服務生態',desc:'為全球高淨值人群提供跨境全週期健康管理服務。',cta:'預約一對一諮詢',q:['服務內核','服務流程','六大康養基地'],h:['值得託付的全週期健康管家','精 · 誠 · 和','先判斷病種，再匹配體系','從診前到診後，每一步都有答案','精準醫療與品質生活並行','把中醫文化帶回生活','六大康養基地 · 一城一境，一地一方案','從治病到養生 · 回到更好的生活','讓健康管理從一次溝通開始'],body:'以專業照護、雙語協調與持續健康支持，陪伴每一個服務階段。',city:['北京 · 核心樞紐','上海 · 國際門戶','廣州 · 南方樞紐'],step:['診前','診中','診後'],svc:['專病精準醫療','高端體檢與影像','術後康復','中醫體質調養','生活品質','長期健康檔案'],tag:['醫學評估','中醫調養','森林康養','湖畔療癒','高端旅居','全程陪伴'],contact:'點擊按鈕開始一對一健康諮詢。',soul:['精','誠','和']}
  };
  /* ---------- 语言选择器 ---------- */
  var picker=document.createElement('div');
  picker.className='language-picker';
  picker.innerHTML='<button class="language-toggle" type="button" aria-expanded="false"><span></span><i>⌄</i></button><div class="language-menu" role="menu"></div>';
  var hero=document.querySelector('.hero');
  if(hero)hero.appendChild(picker);
  var menu=picker.querySelector('.language-menu');
  var toggleLabel=picker.querySelector('.language-toggle span');
  langs.forEach(function(x){
    var b=document.createElement('button');
    b.className='language-option';b.type='button';b.dataset.lang=x[0];
    b.innerHTML='<b>'+x[1]+'</b><small>'+x[2]+'</small>';
    b.addEventListener('click',function(){applyFull(x[0]);picker.classList.remove('open');picker.querySelector('.language-toggle').setAttribute('aria-expanded','false')});
    menu.appendChild(b);
  });
  picker.querySelector('.language-toggle').addEventListener('click',function(){var open=picker.classList.toggle('open');this.setAttribute('aria-expanded',open?'true':'false')});
  document.addEventListener('click',function(e){if(!picker.contains(e.target))picker.classList.remove('open')});

  /* ---------- 中文中英对照快照（用于从任意语言切回时完整恢复） ---------- */
  var SNAP_SELECTORS=['.hero h1','.hero p','.hero .btn','.contact h2','.contact .lead','.contact .btn','.float','.foot','.quick strong','.quick small','.sec h2','.lead','.quote','.card b','.card h3','.card p','.net h3','.net p','.step b','.step h3','.step p','.base small','.base h3','.base p','.tags span','.wx-copy','.ey','.item h3','.item p'];
  var snapshots=[];
  SNAP_SELECTORS.forEach(function(sel){document.querySelectorAll(sel).forEach(function(el){snapshots.push([el,el.innerHTML])})});

  function put(el,v){if(el)el.textContent=v}
  function restoreZH(){
    snapshots.forEach(function(pair){pair[0].innerHTML=pair[1]});
    document.querySelectorAll('.en').forEach(function(e){e.style.display=''});
  }
  function setLangMeta(code){
    document.documentElement.lang=code;
    document.body.dataset.language=code;
    var selected=langs.find(function(x){return x[0]===code})||langs[0];
    document.querySelectorAll('.language-option').forEach(function(b){b.classList.toggle('active',b.dataset.lang===code)});
    toggleLabel.innerHTML=selected[1]+'<small>'+selected[2]+'</small>';
    localStorage.setItem(KEY,code);
  }
  function applyFull(code){
    if(code==='zh-CN'){restoreZH();setLangMeta('zh-CN');return}
    var d=T[code]||T.en;
    document.querySelectorAll('.en').forEach(function(e){e.style.display='none'});
    put(document.querySelector('.hero h1'),d.hero);
    put(document.querySelector('.hero p'),d.desc);
    put(document.querySelector('.hero .btn'),d.cta);
    document.querySelectorAll('.ey').forEach(function(e,i){put(e,d.labels[i%d.labels.length])});
    document.querySelectorAll('.quick strong').forEach(function(e,i){put(e,d.q[i])});
    document.querySelectorAll('.quick small').forEach(function(e){put(e,d.body)});
    document.querySelectorAll('.sec h2').forEach(function(e,i){put(e,d.h[i])});
    document.querySelectorAll('.lead').forEach(function(e){put(e,d.body)});
    put(document.querySelector('.quote'),d.body);
    document.querySelectorAll('.card b').forEach(function(e,i){put(e,d.soul[i])});
    document.querySelectorAll('.card h3').forEach(function(e,i){put(e,d.q[i%3])});
    document.querySelectorAll('.card p').forEach(function(e){put(e,d.body)});
    document.querySelectorAll('.net h3').forEach(function(e,i){put(e,d.city[i])});
    document.querySelectorAll('.net p').forEach(function(e){put(e,d.body)});
    document.querySelectorAll('.step b').forEach(function(e,i){put(e,'0'+(i+1)+' · '+d.step[i])});
    document.querySelectorAll('.step h3').forEach(function(e,i){put(e,d.q[i%3])});
    document.querySelectorAll('.step p').forEach(function(e){put(e,d.body)});
    var health=document.querySelectorAll('.sec.white')[2];
    if(health){health.querySelectorAll('.item h3').forEach(function(e,i){put(e,d.svc[i])});health.querySelectorAll('.item p').forEach(function(e){put(e,d.body)})}
    var culture=document.querySelector('.culture');
    if(culture){culture.querySelectorAll('.item h3').forEach(function(e,i){put(e,d.svc[i%3])});culture.querySelectorAll('.item p').forEach(function(e){put(e,d.body)})}
    document.querySelectorAll('.base small').forEach(function(e,i){put(e,'0'+(i+1)+' · '+d.city[i%3])});
    document.querySelectorAll('.base h3').forEach(function(e,i){put(e,d.q[i%3])});
    document.querySelectorAll('.base p').forEach(function(e){put(e,d.body)});
    document.querySelectorAll('.tags span').forEach(function(e,i){put(e,d.tag[i])});
    put(document.querySelector('.contact .lead'),d.contact);
    put(document.querySelector('.contact .btn'),d.cta);
    put(document.querySelector('.float'),d.cta);
    var foot=document.querySelector('.foot');
    if(foot)foot.textContent='信医健康 · '+d.hero;
    var wx=document.querySelector('.wx-copy');
    if(wx)wx.textContent=d.contact;
    setLangMeta(code);
  }
  var initial=localStorage.getItem(KEY)||'zh-CN';
  if(initial!=='zh-CN'&&!T[initial])initial='zh-CN';
  applyFull(initial);
  setTimeout(function(){applyFull(initial)},0);
  window.addEventListener('load',function(){applyFull(localStorage.getItem(KEY)||'zh-CN')});
})();
