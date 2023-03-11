import { Metadata } from 'next';
import React from 'react';
import MainAbout from '../../components/MainAbout';

export const metadata: Metadata = {
  title: 'Sobre',
};

export default function AboutPage() {
  return (
    <div>
      <MainAbout />
    </div>
  );
}
