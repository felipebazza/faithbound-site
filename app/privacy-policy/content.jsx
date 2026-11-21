const googleApps = 'https://policies.google.com/technologies/partner-sites';
const googleRetention = 'https://policies.google.com/technologies/retention';
const unity = 'https://unity.com/legal/game-player-and-app-user-privacy-faq';
const github = 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement';

export default function PrivacyContent({ locale }) {
  if (locale === 'pt-BR') {
    return (
      <>
        <p><strong>Data de vigência</strong> [Dia de mês de ano]</p>
        <p>Esta Política de Privacidade se aplica ao jogo Faithbound para Android e ao seu site oficial, operados pela Draccoexe Games.</p>

        <h2>Progresso no jogo e preferências</h2>
        <p>O Faithbound guarda seu progresso no jogo e suas configurações, como o idioma e a preferência de exibição de dano, no armazenamento local do aplicativo. Isso permite retomar o jogo e manter suas configurações entre sessões. Você pode remover esses dados do dispositivo limpando o armazenamento do aplicativo nas configurações do Android. Dependendo do dispositivo e das configurações de backup, o Android pode fazer backup dos dados do aplicativo ou restaurá-los.</p>

        <h2>Publicidade e diagnósticos</h2>
        <p>O Faithbound inclui o SDK dos anúncios para dispositivos móveis do Google. Versões de desenvolvimento podem oferecer anúncios de teste opcionais com recompensa. Dependendo da versão e das configurações do SDK, o Google pode coletar seu endereço IP, que pode ser usado para estimar sua localização aproximada, além de interações com o aplicativo, dados de diagnóstico de desempenho e identificadores de dispositivo ou de conta, incluindo o ID de publicidade do Android, quando disponível. O Google usa essas informações para publicidade, mensuração e prevenção de fraudes. O SDK criptografa esses dados em trânsito. Você pode gerenciar seu ID de publicidade nas configurações do Android. <a href={googleApps}>Como o Google usa dados de aplicativos que utilizam seus serviços</a> · <a href={googleRetention}>Política de retenção de dados do Google</a></p>
        <p>O motor de jogo Unity pode enviar à Unity informações sobre o dispositivo e o software, relatórios de falhas e dados de diagnóstico de desempenho para ajudar a diagnosticar problemas e melhorar a estabilidade e a compatibilidade. <a href={unity}>Informações de privacidade da Unity para jogadores</a></p>

        <h2>Site</h2>
        <p>Ao selecionar um idioma, o site do Faithbound guarda essa preferência no seu navegador para lembrar da sua escolha em visitas futuras. Você pode removê-la limpando os dados do site nas configurações do navegador.</p>
        <p>O GitHub Pages hospeda o site. O GitHub registra e armazena os endereços IP dos visitantes para fins de segurança. <a href={github}>Declaração de Privacidade do GitHub</a></p>

        <h2>Solicitações de privacidade e retenção</h2>
        <p>Se você entrar em contato conosco, usamos seu endereço de e-mail e as informações que você fornecer para responder à sua solicitação. Mantemos essa correspondência pelo tempo necessário para atender à solicitação ou cumprir obrigações legais e, depois, a excluímos. Para tirar dúvidas sobre privacidade ou solicitar acesso, correção ou exclusão de informações que mantemos sobre você, envie um e-mail para [e-mail de contato sobre privacidade]. Google, Unity e GitHub tratam os dados que coletam de acordo com suas respectivas políticas de privacidade.</p>
      </>
    );
  }

  return (
    <>
      <p><strong>Effective date</strong> [Month Day, Year]</p>
      <p>This Privacy Policy applies to the Faithbound Android game and its official website, operated by Draccoexe Games.</p>

      <h2>Game progress and preferences</h2>
      <p>Faithbound stores your game progress and settings, such as your language and damage display preferences, in the app’s local storage. This lets you resume playing and keeps your settings between sessions. You can remove this data from your device by clearing the app’s storage in Android settings. Depending on your device and backup settings, Android may back up or restore app data.</p>

      <h2>Advertising and diagnostics</h2>
      <p>Faithbound includes the Google Mobile Ads SDK. Development builds can offer optional rewarded test ads. Depending on the build and SDK settings, Google may collect your IP address, which can be used to estimate your general location, as well as app interactions, performance diagnostics, and device or account identifiers, including the Android advertising ID where available. Google uses this information for advertising, measurement, and fraud prevention. The SDK encrypts this data in transit. You can manage your advertising ID in Android settings. <a href={googleApps}>How Google uses data from apps that use its services</a> · <a href={googleRetention}>Google’s data retention policy</a></p>
      <p>The Unity game engine may send device and software information, crash reports, and performance diagnostics to Unity to help diagnose problems and improve stability and compatibility. <a href={unity}>Unity’s game player privacy information</a></p>

      <h2>Website</h2>
      <p>When you select a language, the Faithbound website stores that preference in your browser so it can remember your choice on later visits. You can remove it by clearing the website’s data in your browser settings.</p>
      <p>GitHub Pages hosts the website. GitHub logs and stores visitors’ IP addresses for security purposes. <a href={github}>GitHub Privacy Statement</a></p>

      <h2>Privacy requests and retention</h2>
      <p>If you contact us, we use your email address and the information you provide to respond to your request. We keep that correspondence for as long as needed to handle the request or meet legal obligations, then delete it. For privacy questions or to request access to, correction of, or deletion of information we hold about you, email [privacy contact email]. Google, Unity, and GitHub handle the data they collect under their respective privacy policies.</p>
    </>
  );
}
