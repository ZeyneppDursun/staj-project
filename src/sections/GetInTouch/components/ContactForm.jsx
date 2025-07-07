// src/sections/GetInTouch/components/ContactForm.jsx

import Button from '../../../components/common/Button';

const ContactForm = () => {
  return (
    <form className="space-y-6 text-left">
      <div>
        <label htmlFor="email" className="block text-sm mb-1">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your email"
          className="w-full px-4 py-2 rounded border border-white-700 bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#62BA1B]"
        />
      </div>

      <div>
        <label htmlFor="mobile" className="block text-sm mb-1">Mobile</label>
        <input
          type="tel"
          id="mobile"
          placeholder="Enter mobile"
          className="w-full px-4 py-2 rounded border border-white-700 bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#62BA1B]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm mb-1">Message</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Enter your message"
          className="w-full px-4 py-2 rounded border border-white-700 bg-white text-zinc-900 placeholder-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#62BA1B]"
        ></textarea>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#3F8E00] hover:bg-[#348e00cb] text-white py-2 font-semibold rounded transition-colors"
        style={{ filter: "drop-shadow(0 4px 6px rgba(98, 186, 27, 0.7))" }}
      >
        Submit &gt;
      </Button>
    </form>
  );
};

export default ContactForm;
