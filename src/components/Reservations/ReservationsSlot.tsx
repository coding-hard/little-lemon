import React from 'react';
import { SlotContainer, SlotList, SlotItem } from './ReservationsSlot.styles';

interface ReservationsSlotProps {
  availableTimes: string[];
}

const ReservationsSlot: React.FC<ReservationsSlotProps> = ({
  availableTimes,
}) => {
  return (
    <SlotContainer>
      <h2>Available Times</h2>
      <SlotList>
        {availableTimes.map((time, index) => (
          <SlotItem key={index}>{time}</SlotItem>
        ))}
      </SlotList>
    </SlotContainer>
  );
};

export default ReservationsSlot;
