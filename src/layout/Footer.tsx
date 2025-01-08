export default function Footer() {
  return (
    <footer className="h-16 border-t">
      <div className="container h-full">
        <div className="h-full flex items-center justify-center">
          <small>&copy; {new Date().getFullYear()}</small>
        </div>
      </div>
    </footer>
  );
}
