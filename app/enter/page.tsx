"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function EnterPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!code.trim() || busy) return;
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      if (!response.ok) setMessage(data.message || "비밀코드를 다시 확인해 주세요.");
      else {
        router.replace("/");
        router.refresh();
      }
    } catch {
      setMessage("잠시 후 다시 시도해 주세요.");
    } finally {
      setBusy(false);
    }
  }

  return <main className="access-stage">
    <div className="access-stars" aria-hidden="true">✦　·　✧　·　☾　·　✦</div>
    <section className="access-diary">
      <span className="access-tape" aria-hidden="true" />
      <p className="access-eyebrow">PRIVATE DIARY · VOL.01</p>
      <div className="access-moon" aria-hidden="true">☾<i>✦</i></div>
      <h1>midnight<br /><em>diary</em></h1>
      <p className="access-copy">이 다이어리는 초대받은 사람만<br />펼쳐볼 수 있어요.</p>
      <form onSubmit={submit}>
        <label htmlFor="secret-code">secret code,</label>
        <input id="secret-code" type="password" value={code} onChange={(event) => setCode(event.target.value.slice(0, 100))} autoComplete="off" placeholder="비밀코드를 입력해 주세요" autoFocus />
        <button type="submit" disabled={busy || !code.trim()}>{busy ? "확인하는 중…" : "다이어리 펼치기 ✦"}</button>
        {message && <p className="access-error" role="alert">{message}</p>}
      </form>
      <small>keep this page between us ♡</small>
    </section>
  </main>;
}
