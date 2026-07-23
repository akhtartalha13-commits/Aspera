import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Logo } from '@/components/ui/Logo'
import { Icon } from '@/components/ui/Icon'
import { ImageSlot } from '@/components/ui/ImageSlot'
import { Reveal } from '@/components/ui/Reveal'
import { contact } from '@/data/site'
import { cnAbout, cnProducts, cnServices, cnWhyChoose } from '@/data/chinese'
import styles from './ChinesePage.module.css'

export default function ChinesePage() {
  usePageMeta('三代人的承诺')

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerBar}>
          <Logo to="/" />
          <div className={styles.headerNote}>中文介绍页</div>
          <a href="#contact" className={styles.headerCta}>
            联系我们
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <ImageSlot fill label="放置纽约与工厂结合的大图" radius={0} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>ASPERA USA · 始于 1984</p>
            <h1 className={styles.heroTitle}>
              三代人的承诺
              <br />
              连接世界，共创未来
            </h1>
            <p className={styles.heroLead}>
              Aspera USA 是一家位于美国纽约的国际贸易与制造服务公司，致力于连接中国优质制造与全球市场。
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.btnPrimary}>
                联系我们
              </a>
              <a href="#about" className={styles.btnOutline}>
                关于我们
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={styles.about}>
        <Reveal>
          <p className={styles.eyebrow}>关于我们</p>
          <h2 className={styles.h2}>三代人的制造经验，源自纽约的国际视野</h2>
          <ul className={styles.bullets}>
            {cnAbout.map((item) => (
              <li key={item} className={styles.bullet}>
                <span className={styles.dot} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <ImageSlot label="放置纽约与工厂结合的图片" height={420} radius={24} />
        </Reveal>
      </section>

      {/* Products */}
      <section className={styles.products}>
        <div className={styles.sectionInner}>
          <div className={styles.centered}>
            <p className={styles.eyebrow}>我们的产品</p>
            <h2 className={styles.h2}>多品类定制制造</h2>
          </div>
          <div className={styles.productGrid}>
            {cnProducts.map((product, i) => (
              <Reveal key={product.label} delay={i * 60}>
                <Link to={product.to} className={styles.productCard}>
                  <Icon name={product.icon} size={36} color="var(--brass-500)" />
                  <span className={styles.productLabel}>{product.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.centered}>
          <p className={styles.eyebrow}>我们的服务</p>
          <h2 className={styles.h2}>一站式贸易与制造服务</h2>
        </div>
        <ul className={styles.serviceGrid}>
          {cnServices.map((s) => (
            <li key={s} className={styles.serviceCell}>
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Why choose */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div className={styles.centered}>
            <h2 className={styles.h2Light}>为什么选择 Aspera USA</h2>
          </div>
          <div className={styles.whyGrid}>
            {cnWhyChoose.map((item) => (
              <div key={item} className={styles.whyCard}>
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.contact}>
        <div className={styles.centered}>
          <p className={styles.eyebrow}>联系我们</p>
          <h2 className={styles.h2}>期待与您携手合作，共创未来</h2>
        </div>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.person}>
              <span className={styles.avatar} aria-hidden="true">
                LZ
              </span>
              <div>
                <div className={styles.name}>{contact.person}</div>
                <div className={styles.role}>总裁 President</div>
              </div>
            </div>
            <div className={styles.contactRows}>
              <div>📍 公司地址：美国纽约</div>
              <a href={contact.phoneHref}>📞 电话：{contact.phoneDisplay}</a>
              <a href={contact.emailHref}>✉️ 邮箱：{contact.email}</a>
              <a href={contact.websiteHref} target="_blank" rel="noopener noreferrer">
                🌐 网站：{contact.website}
              </a>
              <div className={styles.contactPills}>
                <a href="#">WhatsApp</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className={styles.qrCard}>
            <div className={styles.qrTitle}>扫码添加微信</div>
            <ImageSlot label="放置微信二维码" height={220} maxWidth={220} radius={16} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          ASPERA <span className={styles.footerSuffix}>USA</span>
        </div>
        <div className={styles.footerCopy}>© 2026 Aspera USA. 保留所有权利。</div>
        <Link to="/" className={styles.footerLink}>
          English Site →
        </Link>
      </footer>
    </div>
  )
}
