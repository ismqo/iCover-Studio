"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Github, Music2, Pause, Play } from "lucide-react";
import { APPLE_MUSIC_PATH } from "@/lib/apple-logo";
import styles from "./landing.module.css";

const covers = [
  ["After Hours", "THE NIGHT IS YOURS", 1], ["On Repeat", "YOUR DAILY ROTATION", 18],
  ["Sunday\nKind of Love", "SLOW THINGS DOWN", 16], ["Headspace", "ROOM TO BREATHE", 30],
  ["Golden\nHour", "STAY A LITTLE LONGER", 28], ["Pure\nEnergy", "TURN IT UP", 21],
  ["Daydream", "GET LOST IN THE SOUND", 0], ["Deep\nFocus", "IN YOUR ELEMENT", 23],
  ["Feel\nGood", "A LITTLE MORE SUNSHINE", 34], ["Late Night\nDrive", "TAKE THE LONG WAY HOME", 24],
  ["Soft\nSounds", "LESS NOISE. MORE FEELING.", 17], ["Electric", "SOMETHING DIFFERENT", 32],
  ["New\nFavorites", "YOUR NEXT OBSESSION", 19], ["Essentials", "THE ONES THAT STAY", 2],
  ["In Bloom", "A FRESH START", 39], ["Good\nCompany", "BETTER TOGETHER", 14],
  ["Slow\nMornings", "EASE INTO THE DAY", 26], ["No\nSkips", "EVERY TRACK. EVERY TIME.", 6],
] as const;

function Cover({ index }: { index: number }) {
  const [title, subtitle, pattern] = covers[index % covers.length];
  return <div className={`${styles.cover} ${index % 4 === 1 ? styles.centeredCover : ""}`}>
    <img src={`/assets/gradients/${pattern}.png`} alt="" width={300} height={300}/>
    <svg viewBox="0 0 84.3 20.7" className={styles.coverLogo} fill="currentColor"><path d={APPLE_MUSIC_PATH}/></svg>
    <strong>{title}</strong><small>{subtitle}</small>
  </div>;
}

export default function Landing() {
  const [paused, setPaused] = useState(false);
  return <div className={styles.landing}>
    <header className={styles.navbar}>
      <nav aria-label="Main navigation">
        <Link href="/" className={styles.wordmark} aria-label="iCover home"><Music2 size={23} strokeWidth={2.3}/>iCover<span className="studio-label">STUDIO</span></Link>
        <div className={styles.navActions}><span>Playlist cover studio</span><a href="https://github.com/ismqo/iCover-Studio" target="_blank" rel="noreferrer" className={styles.navCta}><Github size={14}/>GitHub</a></div>
      </nav>
    </header>

    <main className={`${styles.hero} ${paused ? styles.paused : ""}`}>
      <div className={styles.wall} aria-hidden="true">
        {Array.from({length:6}, (_, column) => <div className={styles.column} key={column} style={{"--column": column} as React.CSSProperties}>
          {[0,1,2].map(copy => <div className={styles.coverGroup} key={copy}>{[0,1,2].map(row => <Cover key={row} index={column * 3 + row}/>)}</div>)}
        </div>)}
      </div>
      <div className={styles.shade}/>
      <section className={styles.heroContent} aria-labelledby="hero-title">
        <div className={styles.heroBrand}><Music2 size={32}/>iCover</div>
        <h1 id="hero-title">For the love<br/>of your playlists.</h1>
        <p>You found the perfect songs.<br className={styles.mobileBreak}/> Now give them the perfect cover.</p>
        <Link href="/editor" className={styles.heroCta}>Create your cover <ArrowUpRight size={19}/></Link>
        <span className={styles.freeNote}>Free to create. Yours to keep.</span>
      </section>
      <div className={styles.bottomBar}><span>YOUR MUSIC. YOUR ARTWORK.</span><button className={styles.motionButton} onClick={() => setPaused(p => !p)} aria-label={paused ? "Play cover animation" : "Pause cover animation"} aria-pressed={paused}>{paused ? <Play size={16} fill="currentColor"/> : <Pause size={16} fill="currentColor"/>}</button></div>
    </main>
  </div>;
}
