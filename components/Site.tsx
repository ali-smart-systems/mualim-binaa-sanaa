"use client";
import Link from 'next/link'; import { Phone, MessageCircle, ArrowLeft, Menu, HardHat, MapPin, CheckCircle2 } from 'lucide-react'; import { contact, phone, services, whatsapp } from '@/lib/data';
export function Header() { return <header className="dark border-b border-white/10"><div className="wrap flex items-center justify-between gap-4 py-5"><Link href="/" className="flex items-center gap-3 text-xl font-black"><span className="bg-[#d8af66] text-[#101d2c] p-2 rounded"><HardHat size={26} /></span><span>معلم بناء <span className="gold">صنعاء</span></span></Link><nav aria-label="التنقل الرئيسي" className="hidden lg:flex gap-5 text-sm font-bold"><Link className="navlink" href="/">الرئيسية</Link>{services.map(s => <Link className="navlink" key={s.slug} href={'/' + s.slug}>{s.title}</Link>)}<Link className="navlink" href="/gallery">المعرض</Link><Link className="navlink" href="/about">من نحن</Link><Link className="navlink" href="/contact">اتصل بنا</Link></nav><details className="lg:hidden relative"><summary aria-label="فتح القائمة" className="cursor-pointer list-none p-2"><Menu /></summary><nav className="absolute left-0 top-12 w-64 z-40 bg-[#17283a] shadow-xl rounded-lg p-4 flex flex-col gap-4 text-sm"><Link href="/">الرئيسية</Link>{services.map(s => <Link key={s.slug} href={'/' + s.slug}>{s.title}</Link>)}<Link href="/gallery">معرض الصور</Link><Link href="/about">من نحن</Link><Link href="/contact">اتصل بنا</Link></nav></details></div></header> }
export function Footer() { return <footer className="dark py-14"><div className="wrap grid md:grid-cols-3 gap-9"><div><h2 className="text-2xl font-black gold mb-4">معلم بناء صنعاء</h2><p className="leading-9 text-gray-300">أعمال بناء المنازل والفلل والعظم والطوب والبلوك والحجر والأسوار والملاحق في صنعاء.</p></div><div><h2 className="text-lg font-bold mb-4">روابط مهمة</h2><div className="flex flex-col gap-3 text-gray-300"><Link href="/gallery">معرض توضيحي</Link><Link href="/about">من نحن</Link><Link href="/contact">اتصل بنا</Link></div></div><div><h2 className="text-lg font-bold mb-4">تواصل معنا</h2><p className="flex items-center gap-2 mb-3"><MapPin size={18} /> صنعاء، اليمن</p><a href={'tel:+967' + phone} dir="ltr" className="inline-flex gap-2 items-center"><Phone size={18} />{phone}</a></div></div><div className="wrap mt-10 pt-6 border-t border-white/15 text-gray-400 text-sm">© {new Date().getFullYear()} معلم بناء صنعاء. جميع الحقوق محفوظة.</div></footer> }
export function Floating() { return <div className="float"><a className="wa" href={contact} target="_blank" rel="noopener noreferrer" aria-label="الاستفسار عبر واتساب"><MessageCircle size={20} /> واتساب</a><a className="call" href={'tel:+967' + phone} aria-label="اتصال مباشر"><Phone size={20} /> اتصال</a></div> }
export function Cta() { return <section className="dark section"><div className="wrap flex flex-col md:flex-row justify-between md:items-center gap-7"><div><h2 className="heading">لديك مشروع بناء في صنعاء؟</h2><p className="text-gray-300 leading-8">أرسل تفاصيل العمل وموقعه التقريبي للاستفسار عن إمكانية التنفيذ.</p></div><div className="flex flex-wrap gap-3"><a className="btn primary" href={contact} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /> استفسر عبر واتساب</a><a className="btn outline" href={'tel:+967' + phone}><Phone size={19} /> اتصل الآن</a></div></div></section> }
export function PhotoSlot({
    name,
    label,
    wide = false,
}: {
    name: string;
    label: string;
    wide?: boolean;
}) {
    return (
        <div
            className={'photo-slot ' + (wide ? 'photo-slot-wide' : '')}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            <div className="photo-slot-icon" aria-hidden="true">▧</div>
            <span>مكان الصورة: {label}</span>
            <small dir="ltr">{name}.webp</small>

            <img
                src={'/images/' + name + '.webp'}
                alt={label}
                loading="lazy"
                decoding="async"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                }}
            />
        </div>
    );
} export function ServiceCards() { return <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">{services.map(s => <article className="card" key={s.slug}><Link href={'/' + s.slug}><PhotoSlot name={s.image} label={s.title} /></Link><div className="p-6"><h3 className="text-xl font-black mb-3">{s.title}</h3><p className="text-gray-600 leading-8 mb-5">{s.short}</p><Link href={'/' + s.slug} className="font-bold text-[#946b2c] inline-flex gap-2 items-center">تفاصيل الخدمة <ArrowLeft size={17} /></Link></div></article>)}</div> }
export function Checks({ items }: { items: readonly string[] }) { return <ul className="space-y-5">{items.map(x => <li className="flex items-start gap-3" key={x}><CheckCircle2 className="text-[#ae874a] shrink-0 mt-1" />{x}</li>)}</ul> }
