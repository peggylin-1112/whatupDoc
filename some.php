<?php

declare(strict_types=1);

class VehicleSellPriceAndFee
{
    public function __construct(
        private readonly string $type,
        private readonly float $rrp,
        private readonly DateTimeImmutable $lastMotDate,
        private readonly DateTimeImmutable $lastServiceDate,
        private readonly bool $isStolen,
    ) {}

    public function getPrice(): float
    {
        $price = $this->rrp;

        if ($this->isStolen) {
            $price -= $this->rrp * 0.01;
        }

        $price -= $this->getServiceMultiplier();
        $price -= $this->getMotMultiplier();

        return $price;
    }

    private function getMotMultiplier(): float
    {
        $currentDate = new DateTimeImmutable();

        if ($currentDate > $this->lastMotDate->add(new DateInterval('P1Y'))) {
            return $this->rrp * 0.1;
        }

        if ($currentDate > $this->lastMotDate->sub(new DateInterval('P6M'))) {
            return $this->rrp * 0.8;
        }

        return $this->rrp;
    }

    private function getServiceMultiplier(): float
    {
        $currentDate = new DateTimeImmutable();

        if ($currentDate > $this->lastServiceDate->add(new DateInterval('P1Y'))) {
            return $this->rrp * 0.1;
        }

        if ($currentDate > $this->lastServiceDate->sub(new DateInterval('P6M'))) {
            return $this->rrp * 0.8;
        }

        return $this->rrp;
    }
}