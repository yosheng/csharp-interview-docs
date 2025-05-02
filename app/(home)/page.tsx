import Link from 'next/link';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  return (
    <>
      {/* 将背景 div 移到 main 外部并固定铺满 */}
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />
      {/* 确保 main 有 relative 和 z-index */}
      <main className="container relative z-10 mx-auto max-w-5xl px-4 py-12 lg:py-20">
        {/* 移除内部的 div 包装器 */}
        <Hero />
      </main>
    </>
  );
}

function Hero() {
  return (
    <div className="relative z-[2] flex flex-col items-center rounded-lg border bg-card/50 p-8 text-center backdrop-blur-sm md:p-12 lg:p-16">
      <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        C# 面试手册
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
        精选 C# 面试核心知识点与高频题，助你从容应对技术面试。
      </p>
      <div className="inline-flex items-center gap-4">
        <Link
          href="/docs/basic"
          className={cn(
            buttonVariants({ size: 'lg', className: 'rounded-full px-6' }),
          )}
        >
          开始阅读
        </Link>
      </div>
    </div>
  );
}