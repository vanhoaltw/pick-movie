const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-black">
      <main className="flex flex-col items-center border-t dark:border-gray-600">
        <p className="my-2 text-sm text-gray-600 dark:text-gray-300">
          © Nguyen Van Hoa {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
};

export default Footer;
