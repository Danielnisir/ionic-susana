import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
    <IonCardHeader>
      <IonCardTitle> Hello World</IonCardTitle>
      <IonCardSubtitle>This is Daniel Ray Susana</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>This is it, Let's go!</IonCardContent>
  </IonCard>
  );
};

export default ExploreContainer;
