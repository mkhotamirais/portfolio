export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mb-16">
      <div className="container h-16 flex items-center justify-center">
        <small>
          &copy; {new Date().getFullYear()}{" "}
          <a title="github homepage" href="https://mkhotamirais.github.io" className="hover:underline">
            mkhotami
          </a>
        </small>
      </div>
    </footer>
  );
}
