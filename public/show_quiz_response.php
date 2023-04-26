<?php
/**
 * Function that return the render
 * @param $cat String Category from this enum ["tv_cinema", "art_litterature", "musique", "actu_politique", "culture_generale", "sport", "jeux_videos", "all"]
 * @param $dif String Difficulty from this enum ["facile","normal", "difficile", "all"]
 * @param $elv Boolean Show or not a shadow around the block
 * @param $fill Boolean Fill or not the answer pill
 * 
 */

function show_quiz_response($cat, $dif, $elv, $fill)
{
  // Construct and perform the API request
  $category = $cat === 'all' ? '' : '&category=' . $cat;
  $difficulty = $dif === 'all' ? '' : '&difficulty=' . $dif;
  $response = file_get_contents('https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1' . $category . $difficulty);
  $response = json_decode($response);

  // if there isn't any corresponding quiz, just selected a random quiz from all the DB
  if($response->count == 0){
    $response = file_get_contents('https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1');
    $response = json_decode($response);
  }

  // Get data to display
  $question = $response->quizzes[0]->question;
  $answer = $response->quizzes[0]->answer;
  $badAnswers = $response->quizzes[0]->badAnswers;
  // create an array with good and bad answer and shuffling it
  $allAnswers = $badAnswers;
  $allAnswers[] = $answer;
  shuffle($allAnswers);
  // generate Unique Id to allow multiple quiz block on a single page
  $str=rand();
  $randomId = md5($str);

?>
    <!-- Pass the Unique ID through an hidden DIV, and attribute this ID to the main div -->
    <div class="cocoriquiz-random-id" hidden><?= $randomId ?></div>
  <div class="cocoriquiz-container <?= $elv ? "cocoriquiz-shadow" : ""?>" id="<?= $randomId ?>">
    <div class="cocoriquiz-question">
      <?= $question ?>
    </div>
    <div class="cocoriquiz-answers">
      <!-- Display the answers' array -->
      <?php
      for ($i = 0; $i < sizeof($allAnswers); $i++) {
      ?>
        <div class="cocoriquiz-unique-answer"><?= $allAnswers[$i] ?></div>
      <?php
      }
      ?>
    </div>
    <!-- Pass the good Answer through an Hidden div -->
    <div class="cocoriquiz-good" hidden><?= $answer ?></div>
    <div class="cocoriquiz-fill" hidden><?= $fill ?></div>
    <div class="cocoriquiz-result"></div>
    <div class="signature">Powered with <a href="https://quizzapi.jomoreschi.fr/">Cocoriquiz</a></div>
  </div>
<?php
}
