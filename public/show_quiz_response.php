<?php
/**
 * Function that return the render
 * @param $cat String Category from this enum ["tv_cinema", "art_litterature", "musique", "actu_politique", "culture_generale", "sport", "jeux_videos", "all"]
 * @param $dif String Difficulty from this enum ["facile","normal", "difficile", "all"]
 * @param $elv Boolean Show or not a shadow around the block
 * @param $fill Boolean Fill or not the answer pill
 * @param $url Url of the API
 * 
 */

function show_quiz_response($attributes, $url)
{

  // Construct and perform the API request
  $category = $attributes['category'] === 'all' ? '' : '&category=' . $attributes['category'];
  $difficulty = $attributes['difficulty'] === 'all' ? '' : '&difficulty=' . $attributes['difficulty'];
  $response = file_get_contents($url . $category . $difficulty);
  $response = json_decode($response);

  // if there isn't any corresponding quiz, just selected a random quiz from all the DB
  if($response->count == 0){
    $response = file_get_contents($url);
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
    <div class="simplequizblock-random-id" hidden><?= $randomId ?></div>
  <div class="simplequizblock-container <?= $attributes['elevation'] ? "simplequizblock-shadow" : ""?>" id="<?= $randomId ?>">
    <div class="simplequizblock-question">
      <?= $question ?>
    </div>
    <div class="simplequizblock-answers">
      <!-- Display the answers' array -->
      <?php
      for ($i = 0; $i < sizeof($allAnswers); $i++) {
      ?>
        <div class="simplequizblock-unique-answer"><?= $allAnswers[$i] ?></div>
      <?php
      }
      ?>
    </div>
    <div class="simplequizblock-result"></div>
    <div class="signature"><a href="https://quizzapi.jomoreschi.fr/" target="_blank">Proposez vos questions</a></div>
    <!-- Pass the good Answer through an Hidden div -->
    <div class="simplequizblock-good" hidden><?= $answer ?></div>
    <div class="simplequizblock-fill" hidden><?= $attributes['fill'] ?></div>

  </div>
<?php
}
