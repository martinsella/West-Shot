class preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    //loading bar.
    this.graphics = this.add.graphics();
		this.newGraphics = this.add.graphics();
		var progressBar = new Phaser.Geom.Rectangle(490, 304, 400, 50);
		var progressBarFill = new Phaser.Geom.Rectangle(495, 309, 290, 40);
		this.graphics.fillStyle(0xffffff, 1);
		this.graphics.fillRectShape(progressBar);
		this.newGraphics.fillStyle(0xF56509, 1);
		this.newGraphics.fillRectShape(progressBarFill);
		var loadingText = this.add.text(625,379,"100%", { fontSize: '32px', fill: '#FFF' });

    //menus load.
    this.load.image("main_background", "assets/images/undefined/menus/main_background.png");
    this.load.image("menus_background", "assets/images/undefined/menus/menus_background.png");
    this.load.image("main_mountains", "assets/images/undefined/menus/main_mountains.png");
    this.load.image("main_title", "assets/images/undefined/menus/main_title.png");
    this.load.image("main_stick", "assets/images/undefined/menus/main_stick.png");
    this.load.image("language", "assets/images/undefined/menus/language.png");
    this.load.image("credits_chart", "assets/images/undefined/menus/credits_chart.png");
    this.load.image("help_chart", "assets/images/undefined/menus/help_chart.png");
    this.load.image("collection", "assets/images/undefined/menus/collection.png");
    this.load.image("selector_chart", "assets/images/undefined/menus/selector_chart.png");
    this.load.image("pause_defeat_chart", "assets/images/undefined/menus/pause_defeat_chart.png");
    this.load.image("victory_chart", "assets/images/undefined/menus/victory_chart.png");

    //buttons load.
    //undefined.
    this.load.image("b_cred", "assets/images/undefined/buttons/b_cred.png");
    this.load.image("b_cred_over", "assets/images/undefined/buttons/b_cred_over.png");
    this.load.image("b_full", "assets/images/undefined/buttons/b_full.png");
    this.load.image("b_full_over", "assets/images/undefined/buttons/b_full_over.png");
    this.load.image("b_language", "assets/images/undefined/buttons/b_language.png");
    this.load.image("b_language_over", "assets/images/undefined/buttons/b_language_over.png");
    this.load.image("b_music_off", "assets/images/undefined/buttons/b_music_off.png");
    this.load.image("b_music_off_over", "assets/images/undefined/buttons/b_music_off_over.png");
    this.load.image("b_music_on", "assets/images/undefined/buttons/b_music_on.png");
    this.load.image("b_music_on_over", "assets/images/undefined/buttons/b_music_on_over.png");
    this.load.image("b_sfx_off", "assets/images/undefined/buttons/b_sfx_off.png");
    this.load.image("b_sfx_off_over", "assets/images/undefined/buttons/b_sfx_off_over.png");
    this.load.image("b_sfx_on", "assets/images/undefined/buttons/b_sfx_on.png");
    this.load.image("b_sfx_on_over", "assets/images/undefined/buttons/b_sfx_on_over.png");
    this.load.image("b_en", "assets/images/undefined/buttons/b_en.png");
    this.load.image("b_en_over", "assets/images/undefined/buttons/b_en_over.png");
    this.load.image("b_es", "assets/images/undefined/buttons/b_es.png");
    this.load.image("b_es_over", "assets/images/undefined/buttons/b_es_over.png");
    this.load.image("b_back", "assets/images/undefined/buttons/b_back.png");
    this.load.image("b_back_over", "assets/images/undefined/buttons/b_back_over.png");
    this.load.image("b_skip", "assets/images/undefined/buttons/b_skip.png");
    this.load.image("b_1", "assets/images/undefined/buttons/b_1.png");
    this.load.image("b_2", "assets/images/undefined/buttons/b_2.png");
    this.load.image("b_3", "assets/images/undefined/buttons/b_3.png");
    this.load.image("b_4", "assets/images/undefined/buttons/b_4.png");
    this.load.image("b_5", "assets/images/undefined/buttons/b_5.png");
    this.load.image("b_6", "assets/images/undefined/buttons/b_6.png");
    this.load.image("b_7", "assets/images/undefined/buttons/b_7.png");
    this.load.image("b_8", "assets/images/undefined/buttons/b_8.png");
    this.load.image("b_9", "assets/images/undefined/buttons/b_9.png");
    this.load.image("b_10", "assets/images/undefined/buttons/b_10.png");
    this.load.image("b_block", "assets/images/undefined/buttons/b_block.png");
    this.load.image("b_w", "assets/images/undefined/buttons/b_w.png");
    this.load.image("b_w_false", "assets/images/undefined/buttons/b_w_false.png");
    this.load.image("b_w_true", "assets/images/undefined/buttons/b_w_true.png");
    this.load.image("b_a", "assets/images/undefined/buttons/b_a.png");
    this.load.image("b_a_false", "assets/images/undefined/buttons/b_a_false.png");
    this.load.image("b_a_true", "assets/images/undefined/buttons/b_a_true.png");
    this.load.image("b_s", "assets/images/undefined/buttons/b_s.png");
    this.load.image("b_s_false", "assets/images/undefined/buttons/b_s_false.png");
    this.load.image("b_s_true", "assets/images/undefined/buttons/b_s_true.png");
    this.load.image("b_d", "assets/images/undefined/buttons/b_d.png");
    this.load.image("b_d_false", "assets/images/undefined/buttons/b_d_false.png");
    this.load.image("b_d_true", "assets/images/undefined/buttons/b_d_true.png");
    this.load.image("b_pause", "assets/images/undefined/buttons/b_pause.png");
    this.load.image("b_pause_over", "assets/images/undefined/buttons/b_pause_over.png");
    //english.
    this.load.image("b_collection_en", "assets/images/english/buttons/b_collection_en.png");
    this.load.image("b_collection_over_en", "assets/images/english/buttons/b_collection_over_en.png");
    this.load.image("b_exit_en", "assets/images/english/buttons/b_exit_en.png");
    this.load.image("b_exit_over_en", "assets/images/english/buttons/b_exit_over_en.png");
    this.load.image("b_help_en", "assets/images/english/buttons/b_help_en.png");
    this.load.image("b_help_over_en", "assets/images/english/buttons/b_help_over_en.png");
    this.load.image("b_play_en", "assets/images/english/buttons/b_play_en.png");
    this.load.image("b_play_over_en", "assets/images/english/buttons/b_play_over_en.png");
    this.load.image("b_resume_en", "assets/images/english/buttons/b_resume_en.png");
    this.load.image("b_help_2_en", "assets/images/english/buttons/b_help_2_en.png");
    this.load.image("b_main_en", "assets/images/english/buttons/b_main_en.png");
    this.load.image("b_next_en", "assets/images/english/buttons/b_next_en.png");
    this.load.image("b_retry_en", "assets/images/english/buttons/b_retry_en.png");
    //spanish.
    this.load.image("b_collection_es", "assets/images/spanish/buttons/b_collection_es.png");
    this.load.image("b_collection_over_es", "assets/images/spanish/buttons/b_collection_over_es.png");
    this.load.image("b_exit_es", "assets/images/spanish/buttons/b_exit_es.png");
    this.load.image("b_exit_over_es", "assets/images/spanish/buttons/b_exit_over_es.png");
    this.load.image("b_help_es", "assets/images/spanish/buttons/b_help_es.png");
    this.load.image("b_help_over_es", "assets/images/spanish/buttons/b_help_over_es.png");
    this.load.image("b_play_es", "assets/images/spanish/buttons/b_play_es.png");
    this.load.image("b_play_over_es", "assets/images/spanish/buttons/b_play_over_es.png");
    this.load.image("b_resume_es", "assets/images/spanish/buttons/b_resume_es.png");
    this.load.image("b_help_2_es", "assets/images/spanish/buttons/b_help_2_es.png");
    this.load.image("b_main_es", "assets/images/spanish/buttons/b_main_es.png");
    this.load.image("b_next_es", "assets/images/spanish/buttons/b_next_es.png");
    this.load.image("b_retry_es", "assets/images/spanish/buttons/b_retry_es.png");

    //text load.
    //undefined.
    this.load.image("count_fire_1", "assets/images/undefined/levels/count_fire_1.png");
    this.load.image("count_fire_2", "assets/images/undefined/levels/count_fire_2.png");
    this.load.image("count_fire_3", "assets/images/undefined/levels/count_fire_3.png");
    //english.
    this.load.image("start_text_en", "assets/images/english/texts/start_text_en.png");
    this.load.image("cred_text_en", "assets/images/english/texts/cred_text_en.png");
    this.load.image("help_title_en", "assets/images/english/texts/help_title_en.png");
    this.load.image("help_text_1_en", "assets/images/english/texts/help_text_1_en.png");
    this.load.image("help_text_2_en", "assets/images/english/texts/help_text_2_en.png");
    this.load.image("count_fire_en", "assets/images/english/texts/count_fire_en.png");
    this.load.image("pause_text_en", "assets/images/english/texts/pause_text_en.png");
    this.load.image("victory_text_1_en", "assets/images/english/texts/victory_text_1_en.png");
    this.load.image("victory_text_2_en", "assets/images/english/texts/victory_text_2_en.png");
    this.load.image("defeat_text_en", "assets/images/english/texts/defeat_text_en.png");
    //spanish.
    this.load.image("start_text_es", "assets/images/spanish/texts/start_text_es.png");
    this.load.image("cred_text_es", "assets/images/spanish/texts/cred_text_es.png");
    this.load.image("help_title_es", "assets/images/spanish/texts/help_title_es.png");
    this.load.image("help_text_1_es", "assets/images/spanish/texts/help_text_1_es.png");
    this.load.image("help_text_2_es", "assets/images/spanish/texts/help_text_2_es.png");
    this.load.image("count_fire_es", "assets/images/spanish/texts/count_fire_es.png");
    this.load.image("pause_text_es", "assets/images/spanish/texts/pause_text_es.png");
    this.load.image("victory_text_1_es", "assets/images/spanish/texts/victory_text_1_es.png");
    this.load.image("victory_text_2_es", "assets/images/spanish/texts/victory_text_2_es.png");
    this.load.image("defeat_text_es", "assets/images/spanish/texts/defeat_text_es.png");

    //players and objects load.
    //undefined.
    this.load.spritesheet("main_walk","assets/images/undefined/menus/main_walk.png",
      {
        frameHeight: 149,
        frameWidth: 89,
      }
    );
    this.load.spritesheet("player_walk","assets/images/undefined/objects/player_walk.png",
      {
        frameHeight: 380,
        frameWidth: 290,
      }
    );
    this.load.spritesheet("player_shoot","assets/images/undefined/objects/player_shoot.png",
      {
        frameHeight: 380,
        frameWidth: 290,
      }
    );
    this.load.spritesheet("player_death","assets/images/undefined/objects/player_death.png",
      {
        frameHeight: 380,
        frameWidth: 410,
      }
    );
    this.load.spritesheet("enemy_1_walk","assets/images/undefined/objects/enemy_1_walk.png",
      {
        frameHeight: 380,
        frameWidth: 290,
      }
    );
    this.load.spritesheet("enemy_1_shoot","assets/images/undefined/objects/enemy_1_shoot.png",
      {
        frameHeight: 380,
        frameWidth: 290,
      }
    );
    this.load.spritesheet("enemy_1_death","assets/images/undefined/objects/enemy_1_death.png",
      {
        frameHeight: 380,
        frameWidth: 410,
      }
    );
    this.load.spritesheet("enemy_2_walk","assets/images/undefined/objects/enemy_2_walk.png",
      {
        frameHeight: 380,
        frameWidth: 290,
      }
    );
    this.load.spritesheet("enemy_2_shoot","assets/images/undefined/objects/enemy_2_shoot.png",
      {
        frameHeight: 379,
        frameWidth: 290,
      }
    );
    this.load.spritesheet("enemy_2_death","assets/images/undefined/objects/enemy_2_death.png",
      {
        frameHeight: 380,
        frameWidth: 410,
      }
    );
    this.load.image("bullet", "assets/images/undefined/objects/bullet.png");
    this.load.image("enemy_1_hat", "assets/images/undefined/objects/enemy_1_hat.png");
    this.load.image("enemy_2_hat", "assets/images/undefined/objects/enemy_2_hat.png");
    //english.
    this.load.image("hat_1_en", "assets/images/english/objects/hat_1_en.png");
    this.load.image("hat_2_en", "assets/images/english/objects/hat_2_en.png");
    //spanish.
    this.load.image("hat_1_es", "assets/images/spanish/objects/hat_1_es.png");
    this.load.image("hat_2_es", "assets/images/spanish/objects/hat_2_es.png");

    //audio load.
    //music load.
    this.load.audio("music", "assets/music/music.mp3");
    this.load.audio("defeat", "assets/music/defeat.mp3");
    //sfx load.
    this.load.audio("click_01", "assets/sfx/click_01.mp3");
    this.load.audio("click_02", "assets/sfx/click_02.mp3");
    this.load.audio("gun_shot", "assets/sfx/gun_shot.mp3");
    this.load.audio("win", "assets/sfx/win.mp3");
    this.load.audio("wind", "assets/sfx/wind.mp3");

    //videos load.
    //undefined.
    this.load.video('help_video_1', 'assets/videos/help_video_1.mp4', 'loadeddata', false, true);
    //english.
    this.load.video('help_video_2_en', 'assets/videos/help_video_2_en.mp4', 'loadeddata', false, true);
    //spanish.
    this.load.video('help_video_2_es', 'assets/videos/help_video_2_es.mp4', 'loadeddata', false, true);

    //levels load.
    this.load.image("count_background", "assets/images/undefined/levels/count_background.png");
    //level 1.
    this.load.image("level_1_sky", "assets/images/undefined/levels/level_1_sky.png");
    this.load.image("level_1_cloud_1", "assets/images/undefined/levels/level_1_cloud_1.png");
    this.load.image("level_1_cloud_2", "assets/images/undefined/levels/level_1_cloud_2.png");
    this.load.image("level_1_building", "assets/images/undefined/levels/level_1_building.png");
    this.load.image("level_1_mountains", "assets/images/undefined/levels/level_1_mountains.png");
    //level 2.
    this.load.image("level_2_sky", "assets/images/undefined/levels/level_2_sky.png");
    this.load.image("level_2_cloud_1", "assets/images/undefined/levels/level_2_cloud_1.png");
    this.load.image("level_2_cloud_2", "assets/images/undefined/levels/level_2_cloud_2.png");
    this.load.image("level_2_mountains", "assets/images/undefined/levels/level_2_mountains.png");
    
    //loading bar.
		for(var i =0;i<30;i++) {
    this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics,loadingText:loadingText});
    }
  }

  //update loading bar.
  updateBar(percentage) {
    this.newGraphics.clear();
    this.newGraphics.fillStyle(0xF56509, 1);
    this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(495, 309, percentage*390, 40));
    percentage = percentage * 100;
    this.loadingText.setText(percentage.toFixed(2) + "%");
	}
	create() {
    this.scene.start("language");
  }
}

export default preloader;
