import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: ""})
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
    };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <p>NOTE: Just an example how it could look like - not a working contact form</p>

        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
          Name
          <input type="text" name="name" className="input" placeholder="John" required value={form.name} onChange={(e) => handleChange(e)} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className="text-black-500 font-semibold">
          Email
          <input type="Email" name="email" className="input" placeholder="John@email.com" required value={form.email} onChange={(e) => handleChange(e)} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className="text-black-500 font-semibold">
          Your Message
          <textarea name="message" rows={4} className="textarea" placeholder="Let me know how I can help you!" required value={form.message} onChange={(e) => handleChange(e)} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
