
export default function QanounOthmane() {
  return (
    <main className="min-h-screen bg-black text-white font-serif">
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 p-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6 animate-pulse">
          قانون عثمان
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl text-zinc-300">
          موقع فكري، يعبر عن رحلة وعي… من القلب إلى الزمكان.
        </p>
        <div className="mt-10 text-zinc-500 text-sm">
          <span className="hover:text-yellow-300 cursor-pointer" onClick={() => alert('اللوح المخفي لا يُفتح إلا بالبصيرة.')}>●</span>
        </div>
      </section>

      <section className="px-6 py-12 md:px-24">
        <h2 className="text-3xl text-yellow-300 mb-6">أقسام الموقع</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-zinc-200">
          <li>✦ الأفكار</li>
          <li>✦ البيانات</li>
          <li>✦ الخواطر القرآنية</li>
          <li>✦ الزمن اللامتناهي</li>
          <li>✦ تواصل</li>
        </ul>
      </section>

      <section className="px-6 py-12 md:px-24 border-t border-zinc-700">
        <h2 className="text-2xl text-yellow-400 mb-4">افتتاحية قانون عثمان</h2>
        <p className="text-lg text-zinc-300 leading-relaxed max-w-4xl">
          في زمن تتسارع فيه العقول وتضيع الأرواح، يولد هذا الموقع من رحم التأمل والفهم، لا ليكون فقط فضاءً للقراءة، بل مرآة للذات. قانون عثمان ليس قانوناً يُفرض، بل دعوة للفهم، وسفر في الزمن بين اللحظة والأبد.
          هنا، لا تُعتمد الكلمات فقط، بل يُصغى للسكينة، ويُرى ما لا يُقال.
        </p>
      </section>

      <footer className="text-center text-zinc-600 text-sm py-6">
        &copy; 2025 قانون عثمان. كل الحقوق محفوظة.
      </footer>
    </main>
  );
}
