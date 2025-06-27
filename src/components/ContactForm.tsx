
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-sky-200 rounded-2xl p-8 shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-dark-text">Send a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-dark-text mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border-2 border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-colors duration-200 text-dark-text"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-dark-text mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border-2 border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-colors duration-200 text-dark-text"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-dark-text mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white border-2 border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-colors duration-200 text-dark-text resize-none"
            placeholder="Tell me about your project or just say hello!"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
