export async function generateStaticParams() {
  return [];
}


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Idk here is a page with the slug of <strong>{slug}</strong>
    </div>
  );
}
