import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Payment Failure Rate',
      description: 'Unsuccessful payments drain merchant profits yearly—the majority can be salvaged with proper tools and strategy',
      value: '18%',
      background: 'linear-gradient(135deg, #0066cc 0%, #3388dd 100%)'
    },
    {
      title: 'Global Revenue Loss',
      description: 'Online retailers forfeit half a trillion dollars in retrievable income annually due to payment transaction failures',
      value: '$460B',
      background: 'linear-gradient(135deg, #3388dd 0%, #0066cc 100%)'
    },
    {
      title: 'Lost Customer Rate',
      description: 'Over two-thirds of buyers abandon merchants permanently following a single declined transaction—speed matters most',
      value: '71%',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Average Recovery Rate',
      description: 'Our smart retry technology successfully reclaims close to one-third of unsuccessful payments without human input',
      value: '30%',
      background: 'linear-gradient(135deg, #00d4aa 0%, #00bfa5 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>The Cost of Doing Nothing</StatsSectionTitle>
        <StatsSectionDescription>
          Each payment decline equals missed opportunity. Discover how our solution transforms transaction failures into revenue growth.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
