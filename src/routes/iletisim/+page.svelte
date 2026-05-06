<script>
  import Icon from '$lib/components/Icon.svelte';
  import { SERVICES } from '$lib/data.js';

  let form = { name: '', email: '', phone: '', service: '', message: '' };
  let errors = {};
  let sent = false;

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Adınızı giriniz';
    if (!form.email.trim()) e.email = 'E-posta giriniz';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Geçerli bir e-posta giriniz';
    if (!form.phone.trim()) e.phone = 'Telefon numaranızı giriniz';
    if (!form.message.trim() || form.message.length < 10) e.message = 'En az 10 karakterlik mesaj giriniz';
    errors = e;
    return Object.keys(e).length === 0;
  }

  function submit(ev) {
    ev.preventDefault();
    if (validate()) {
      sent = true;
      form = { name: '', email: '', phone: '', service: '', message: '' };
      setTimeout(() => sent = false, 5000);
    }
  }
</script>

<svelte:head><title>İletişim — Kösek Enerji</title></svelte:head>

<section class="page-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position: relative; z-index: 2">
    <div class="breadcrumb">Anasayfa <span>›</span> İletişim</div>
    <h1 class="display-xl"><span style="color: var(--accent)">KONUŞALIM.</span><br/>PROJENİZİ DEĞERLENDİRELİM.</h1>
    <p class="lead">Keşif, fizibilite ve fiyat teklifi tamamen ücretsiz. Formu doldurun veya direkt arayın — 24 saat içinde dönüş yapıyoruz.</p>
  </div>
</section>

<section style="padding-top: 0">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-info">
        <div class="contact-info-card">
          <div class="ic"><Icon name="Phone" size={20}/></div>
          <div>
            <div class="label">Telefon</div>
            <div class="val"><a href="tel:+903121234567">+90 312 123 45 67</a></div>
            <div class="val sub">7/24 Acil: +90 532 555 12 12</div>
          </div>
        </div>
        <div class="contact-info-card">
          <div class="ic"><Icon name="Mail" size={20}/></div>
          <div>
            <div class="label">E-posta</div>
            <div class="val"><a href="mailto:info@kosekenerji.com">info@kosekenerji.com</a></div>
            <div class="val sub">Teklif: teklif@kosekenerji.com</div>
          </div>
        </div>
        <div class="contact-info-card">
          <div class="ic"><Icon name="Pin" size={20}/></div>
          <div>
            <div class="label">Adres</div>
            <div class="val">OSTİM OSB, 100. Yıl Bulvarı No:42<br/>Yenimahalle / Ankara</div>
          </div>
        </div>
        <div class="contact-info-card">
          <div class="ic"><Icon name="Clock" size={20}/></div>
          <div>
            <div class="label">Çalışma Saatleri</div>
            <div class="val">Pzt – Cmt · 08:00 – 18:00</div>
            <div class="val sub">Acil servis · 7/24</div>
          </div>
        </div>
      </div>

      <form class="contact-form" on:submit={submit} novalidate>
        {#if sent}
          <div class="form-success">
            <Icon name="Check" size={18}/>
            Mesajınız iletildi. 24 saat içinde dönüş yapacağız.
          </div>
        {/if}
        <div class="form-row">
          <div class="form-group">
            <label for="name">Ad Soyad *</label>
            <input id="name" type="text" bind:value={form.name} placeholder="Adınız Soyadınız"/>
            <div class="err">{errors.name || ''}</div>
          </div>
          <div class="form-group">
            <label for="phone">Telefon *</label>
            <input id="phone" type="tel" bind:value={form.phone} placeholder="+90 5__ ___ __ __"/>
            <div class="err">{errors.phone || ''}</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="email">E-posta *</label>
            <input id="email" type="email" bind:value={form.email} placeholder="ornek@firma.com"/>
            <div class="err">{errors.email || ''}</div>
          </div>
          <div class="form-group">
            <label for="service">İlgilendiğiniz Hizmet</label>
            <select id="service" bind:value={form.service}>
              <option value="">Seçiniz...</option>
              {#each SERVICES as s}<option value={s.title}>{s.title}</option>{/each}
              <option value="diger">Diğer</option>
            </select>
            <div class="err"></div>
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 18px">
          <label for="message">Mesajınız *</label>
          <textarea id="message" bind:value={form.message} placeholder="Projeniz hakkında kısa bilgi verin..."></textarea>
          <div class="err">{errors.message || ''}</div>
        </div>
        <div class="form-submit">
          <span class="form-note">* zorunlu alanlar</span>
          <button type="submit" class="btn btn-primary">Mesajı Gönder <Icon name="Arrow" size={16}/></button>
        </div>
      </form>
    </div>

    <div class="map-frame">
      <svg viewBox="0 0 800 380" preserveAspectRatio="xMidYMid slice" style="width: 100%; height: 100%">
        <defs>
          <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A2540" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="800" height="380" fill="url(#mapgrid)"/>
        <path d="M0 200 Q200 180 400 220 T800 200" stroke="#FFD400" stroke-width="1.5" fill="none" opacity="0.4"/>
        <path d="M0 240 Q300 260 500 220 T800 250" stroke="#FFD400" stroke-width="1" fill="none" opacity="0.3"/>
        <circle cx="400" cy="190" r="50" fill="#FFD400" opacity="0.08"/>
        <circle cx="400" cy="190" r="25" fill="#FFD400" opacity="0.15"/>
        <circle cx="400" cy="190" r="7" fill="#FFD400"/>
        <text x="400" y="155" text-anchor="middle" fill="#FAFBFC" font-family="Space Grotesk" font-size="16" font-weight="600">OSTİM OSB</text>
        <text x="400" y="240" text-anchor="middle" fill="#8A99B8" font-family="ui-monospace" font-size="10" letter-spacing="2">39.9784°N · 32.7567°E</text>
      </svg>
    </div>
  </div>
</section>

<style>
  .contact-info-card .val.sub { font-size: 13px; color: var(--text-dim); font-weight: 400; margin-top: 4px; }
</style>
