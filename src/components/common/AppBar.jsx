//components/common/AppBar.jsx

const AppBar = ({menus=[
          { name: "Zeynep"},
          { name: "Tunahan"},
          { name: "Testimonials"},
          { name: "Recent Work"},
          { name: "Get In Touch" }
        ]}) => {
  return (
    <nav className="flex items-center px-8 py-4 bg-[#262627] border-b border-gray-700">
      <div className="flex flex-grow justify-center space-x-12">
        {menus.map(link => (
          <a key={link.name} className="text-gray-300 hover:text-white transition-colors text-sm">
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex space-x-5">
        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <svg
            className="w-5 h-5 text-gray-300 hover:text-white transition"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.851-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.369 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM6.86 20.452H3.814V9h3.046v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.546C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.225 0z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <svg
            className="w-6 h-6 text-gray-300 hover:text-white transition -translate-y-0.5"
            fill="currentColor"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.23-30.23c-20.91-8.34-70.57-6.44-94.48-6.44s-73.57-1.9-94.48,6.44a54,54,0,0,0-30.23,30.23C93,182.57,91.1,232.23,91.1,256s1.9,73.57,6.44,94.48a54,54,0,0,0,30.23,30.23c20.91,8.34,70.57,6.44,94.48,6.44s73.57,1.9,94.48-6.44a54,54,0,0,0,30.23-30.23c8.34-20.91,6.44-70.57,6.44-94.48S357,182.57,348.71,161.66ZM224,338.66A82.66,82.66,0,1,1,306.66,256,82.75,82.75,0,0,1,224,338.66Zm85.33-148a19.33,19.33,0,1,1,19.33-19.33A19.34,19.34,0,0,1,309.33,190.66Zm111-54.66C416,64.6,383.4,32,344,32H104C64.6,32,32,64.6,32,104V408c0,39.4,32.6,72,72,72H344c39.4,0,72-32.6,72-72V104ZM384,408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V104a40,40,0,0,1,40-40H344a40,40,0,0,1,40,40Z"/>
          </svg>
        </a>


        {/* Twitter */}
        <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <svg
            className="w-5 h-5 text-gray-300 hover:text-white transition"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.917 2.203-4.917 4.917 0 .39.045.765.127 1.124-4.083-.205-7.702-2.159-10.126-5.134-.422.722-.664 1.561-.664 2.457 0 1.69.86 3.179 2.17 4.053-.799-.026-1.552-.245-2.21-.611v.061c0 2.367 1.684 4.342 3.918 4.788-.41.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.415-1.68 1.315-3.809 2.097-6.102 2.097-.396 0-.787-.023-1.174-.067 2.179 1.397 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default AppBar;
