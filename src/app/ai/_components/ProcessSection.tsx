"use client";

import { motion } from "framer-motion";
import { Search, Filter, Calculator, Settings, Rocket } from "lucide-react";

const steps = [
  { icon: Search, step: "STEP 1", title: "業務の棚卸し", body: "現在の業務、担当者、作業時間、使用している書類やツールを整理します。" },
  { icon: Filter, step: "STEP 2", title: "削減可能業務の特定", body: "繰り返し作業、転記、検索、定型対応など、AIやシステムへ任せられる可能性がある業務を抽出します。" },
  { icon: Calculator, step: "STEP 3", title: "改善効果の試算", body: "削減できる作業時間、人件費、外注費、対応速度などの改善可能性を確認します。" },
  { icon: Settings, step: "STEP 4", title: "御社専用の仕組みを設計", body: "既製品を無理に当てはめず、現在の業務に合うAI活用方法を設計します。" },
  { icon: Rocket, step: "STEP 5", title: "導入・運用・改善", body: "実際の業務へ組み込み、社員が使える状態まで支援します。導入後も必要に応じて改善します。" },
];

export default function ProcessSection() {
  return (
    <section className="relative py-14 md:py-20 bg-s3-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", right: "0%", top: "20%", width: 600, height: 500, background: "radial-gradient(circle, rgba(123,94,255,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>
      <div className="relative max-w-[760px] mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.3rem)", lineHeight: 1.5 }}
          >
            ツール選びからではなく、
            <br />
            <span className="gradient-text">現在の業務を知る</span>ところから
            <br className="sm:hidden" />
            始めます。
          </motion.h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-6 top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(0,200,255,0.3), rgba(123,94,255,0.4))" }}
          />
          <div className="flex flex-col gap-7 md:gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-16"
                >
                  <div
                    className="absolute left-0 top-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(145deg, rgba(0,200,255,0.14), rgba(123,94,255,0.14))", border: "1px solid rgba(0,200,255,0.3)" }}
                  >
                    <Icon size={19} style={{ color: "#00C8FF" }} />
                  </div>
                  <p className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.15em", color: "rgba(0,200,255,0.75)" }}>{s.step}</p>
                  <p className="text-white font-bold mt-0.5" style={{ fontSize: "1.02rem" }}>{s.title}</p>
                  <p className="text-s3-muted mt-1 leading-relaxed" style={{ fontSize: "0.88rem" }}>{s.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
