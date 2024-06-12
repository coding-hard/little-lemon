import React from 'react';
import {
  SlotContainer,
  SlotList,
  SlotItem,
  SlotTitle,
} from './ReservationsSlot.styles';

interface ReservationsSlotProps {
  availableTimes: string[];
}

const ReservationsSlot: React.FC<ReservationsSlotProps> = ({
  availableTimes,
}) => {
  return (
    <SlotContainer>
      <SlotTitle id="available-times-title">Available Times</SlotTitle>
      <SlotList role="list" aria-labelledby="available-times-title">
        {availableTimes.map((time, index) => (
          <SlotItem key={index} role="listitem" tabIndex={0}>
            {time}
          </SlotItem>
        ))}
      </SlotList>
    </SlotContainer>
  );
};

export default ReservationsSlot;
