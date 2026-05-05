export default function ButtonPremium({ text }: { text: string }) {
  return (
    <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 shadow-lg shadow-blue-500/20">
      {text}
    </button>
  );
}