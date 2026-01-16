export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <p className="text-sm text-sl-muted">
          © {new Date().getFullYear()} Simplilearn. All rights reserved.
        </p>

        {/* Optional note */}
        <p className="text-sm text-sl-muted">
          Dallas Round Table · AI Leadership
        </p>
      </div>
    </footer>
  );
}


