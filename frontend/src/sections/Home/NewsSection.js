import React from 'react';
import ContentCard from '../../components/ContentCard';

const NewsSection = () => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Notícias</h2>
      <div className="grid grid-cols-3 gap-10">

          <ContentCard 
          key={undefined}
          imgSrc={'placeholder.png'} 
          title={"Notícia"} 
          description={"Body text for whatever you'd like to say..."} 
          width='w-64'/>

          <ContentCard 
          key={undefined}
          imgSrc={'placeholder.png'} 
          title={"Notícia"} 
          description={"Body text for whatever you'd like to say..."} 
          width='w-64'/>

          <ContentCard 
          key={undefined}
          imgSrc={'placeholder.png'} 
          title={"Notícia"} 
          description={"Body text for whatever you'd like to say..."} 
          width='w-64'/>


      </div>
    </div>
  );
}

export default NewsSection;
