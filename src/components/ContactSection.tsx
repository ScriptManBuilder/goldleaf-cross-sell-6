import React, { useState } from 'react';
import {
  ContactContainer,
  ContactContent,
  ContactGrid,
  ContactForm,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  InfoCard,
  InfoTitle,
  InfoDescription,
  InfoLink
} from '../styles/ContactSection.styles';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: 'Automated Recovery',
      description: 'Our AI-powered system automatically recovers failed payments and abandoned carts, saving you time and increasing revenue.'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Get detailed analytics and insights into your payment failures and customer behavior to optimize your checkout process.'
    },
    {
      title: 'Seamless Integration',
      description: 'Easy integration with your existing eCommerce platform. No coding required, just plug and play.'
    }
  ];

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>Let's recover your lost revenue</ContactTitle>
        <ContactDescription>
          Get in touch to learn how we can help you recover failed payments and increase your revenue.
        </ContactDescription>
        
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            {showSuccess && (
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#10b981', 
                color: 'white', 
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <p>Fill out the form below to get in touch with us.</p>
            
            {/* Hidden field with your Web3Forms access key */}
            <input type="hidden" name="access_key" value={process.env.REACT_APP_WEB3FORMS_KEY} />
            
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput 
                type="text" 
                name="name"
                placeholder="Your name" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput 
                type="email" 
                name="email"
                placeholder="your.email@company.com" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                name="message"
                placeholder="Tell us about your business and payment recovery needs..." 
                rows={5}
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            {features.map((feature, index) => (
              <InfoCard key={index}>
                <InfoTitle>{feature.title}</InfoTitle>
                <InfoDescription>{feature.description}</InfoDescription>
              </InfoCard>
            ))}
            
            <InfoCard style={{ marginTop: '2rem' }}>
              <InfoTitle style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Contact Information</InfoTitle>
              <InfoDescription>
                <strong>Email Support:</strong>
                <br />
                <span style={{ 
                  color: '#0066cc',
                  userSelect: 'text'
                }}>
                  {process.env.REACT_APP_EMAIL_SUPPORT}
                </span>
              </InfoDescription>
              <InfoDescription style={{ marginTop: '1rem' }}>
                <strong>Customer Service:</strong>
                <br />
                <InfoLink href={`tel:${process.env.REACT_APP_PHONE_NUMBER?.replace(/\s+/g, '')}`}>
                  {process.env.REACT_APP_PHONE_DISPLAY}
                </InfoLink>
              </InfoDescription>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;