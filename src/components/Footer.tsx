export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} UpFund. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


