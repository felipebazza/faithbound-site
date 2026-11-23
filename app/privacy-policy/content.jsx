const googleApps = 'https://policies.google.com/technologies/partner-sites';
const googleRetention = 'https://policies.google.com/technologies/retention';
const unity = 'https://unity.com/legal/game-player-and-app-user-privacy-faq';
const github = 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement';

export default function PrivacyContent({ locale }) {
  if (locale === 'pt-BR') {
    return (
      <>
        <p><strong>Última atualização</strong> — 23/11/2026</p>
        <p>Esta política se aplica ao jogo Faithbound para Android e ao seu site oficial, operados pela Draccoexe Games.</p>

        <h2>Progresso e preferências</h2>
        <p>O Faithbound armazena no dispositivo seu progresso no jogo e configurações como idioma e exibição dos números de dano. Esses dados permitem retomar a partida e manter suas preferências. Você pode removê-los ao limpar o armazenamento do app nas configurações do Android. Dependendo das configurações de backup do dispositivo, o Android pode fazer backup desses dados e restaurá-los.</p>

        <h2>Anúncios recompensados e escolhas de privacidade</h2>
        <p>O Faithbound usa o Google AdMob para oferecer anúncios recompensados opcionais. Ao concluir um anúncio nas condições indicadas no jogo, você pode receber um bônus temporário de ouro virtual. O SDK do Google Mobile Ads pode coletar e compartilhar endereço IP, que pode indicar sua localização aproximada, interações com o app e com anúncios, informações de desempenho e identificadores do dispositivo ou da conta. Esses identificadores podem incluir o ID de publicidade do Android, quando disponível. O Google usa esses dados para veicular e medir anúncios, analisar desempenho e prevenir fraudes. O SDK criptografa os dados em trânsito.</p>
        <p>Quando aplicável, o jogo apresenta escolhas de consentimento por meio da plataforma de mensagens do Google. Quando a opção estiver disponível, você pode rever suas escolhas em Configurações → Privacidade dos anúncios. Você também pode gerenciar seu ID de publicidade nas configurações do Android. Consulte <a href={googleApps}>como o Google usa os dados de apps parceiros</a> e <a href={googleRetention}>como o Google retém esses dados</a>.</p>

        <h2>Diagnósticos</h2>
        <p>A engine Unity pode enviar informações sobre o dispositivo e o software, relatórios de falhas e dados de desempenho à Unity para diagnosticar problemas e melhorar a estabilidade e a compatibilidade. <a href={unity}>Informações de privacidade da Unity</a></p>

        <h2>Site oficial</h2>
        <p>O site salva no navegador o idioma que você escolhe para lembrar essa preferência em visitas futuras. Você pode removê-la limpando os dados do site no navegador. O GitHub Pages hospeda o site, e o GitHub registra e armazena endereços IP de visitantes para fins de segurança. <a href={github}>Política de privacidade do GitHub</a></p>

        <h2>Contato, retenção e exclusão</h2>
        <p>Se você entrar em contato conosco, usamos seu endereço de e-mail e as informações que você fornecer para responder à solicitação. Mantemos essa correspondência pelo tempo necessário para atender à solicitação ou cumprir obrigações legais. Depois, excluímos a correspondência. Para dúvidas de privacidade ou para solicitar acesso, correção ou exclusão dos dados que mantemos sobre você, escreva para [e-mail de privacidade]. O Google, a Unity e o GitHub tratam e retêm os dados que coletam conforme suas respectivas políticas.</p>
      </>
    );
  }

  return (
    <>
      <p><strong>Last updated</strong> — 11/23/2026</p>
      <p>This policy applies to the Faithbound Android game and its official website, operated by Draccoexe Games.</p>

      <h2>Game progress and preferences</h2>
      <p>Faithbound stores your game progress and settings on your device, including your language and damage number preferences. This lets you resume playing and keeps your settings between sessions. You can remove this data by clearing the app’s storage in Android settings. Depending on your device’s backup settings, Android may back up and restore this data.</p>

      <h2>Rewarded ads and privacy choices</h2>
      <p>Faithbound uses Google AdMob to offer optional rewarded ads. If you complete an ad under the conditions shown in the game, you can earn a temporary virtual gold bonus. The Google Mobile Ads SDK may collect and share your IP address, which can indicate your approximate location, app and ad interactions, performance information, and device or account identifiers. These identifiers may include the Android advertising ID when available. Google uses this data to serve and measure ads, analyze performance, and prevent fraud. The SDK encrypts data in transit.</p>
      <p>Where applicable, the game presents consent choices through Google’s messaging platform. When the option is available, you can review your choices under Settings → Ad Privacy Options. You can also manage your advertising ID in Android settings. See <a href={googleApps}>how Google uses data from partner apps</a> and <a href={googleRetention}>how Google retains data</a>.</p>

      <h2>Diagnostics</h2>
      <p>The Unity game engine may send device and software information, crash reports, and performance data to Unity to diagnose problems and improve stability and compatibility. <a href={unity}>Unity’s privacy information for game players</a></p>

      <h2>Official website</h2>
      <p>The website stores your language choice in your browser so it can remember your preference on future visits. You can remove it by clearing the website’s data in your browser. GitHub Pages hosts the website, and GitHub logs and stores visitors’ IP addresses for security purposes. <a href={github}>GitHub Privacy Statement</a></p>

      <h2>Contact, retention, and deletion</h2>
      <p>If you contact us, we use your email address and the information you provide to respond to your request. We keep that correspondence as long as needed to handle the request or meet legal obligations, then delete it. For privacy questions or to request access to, correction of, or deletion of information we hold about you, email [privacy contact email]. Google, Unity, and GitHub handle and retain the data they collect under their respective policies.</p>
    </>
  );
}
