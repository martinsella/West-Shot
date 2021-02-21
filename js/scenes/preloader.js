class preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    //menus load.
    this.load.image("main_background", "assets/images/undefined/menus/main_background.png");
    this.load.image("menus_background", "assets/images/undefined/menus/menus_background.png");
    this.load.image("main_title", "assets/images/undefined/menus/main_title.png");
    this.load.image("language", "assets/images/undefined/menus/language.png");
    this.load.image("credits_chart", "assets/images/undefined/menus/credits_chart.png");
    this.load.image("selector_chart", "assets/images/undefined/menus/selector_chart.png");

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
    this.load.image("b_1", "assets/images/undefined/buttons/b_1.png");
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
    //english.
    this.load.image("b_collection_en", "assets/images/english/buttons/b_collection_en.png");
    this.load.image("b_collection_over_en", "assets/images/english/buttons/b_collection_over_en.png");
    this.load.image("b_exit_en", "assets/images/english/buttons/b_exit_en.png");
    this.load.image("b_exit_over_en", "assets/images/english/buttons/b_exit_over_en.png");
    this.load.image("b_help_en", "assets/images/english/buttons/b_help_en.png");
    this.load.image("b_help_over_en", "assets/images/english/buttons/b_help_over_en.png");
    this.load.image("b_play_en", "assets/images/english/buttons/b_play_en.png");
    this.load.image("b_play_over_en", "assets/images/english/buttons/b_play_over_en.png");
    //spanish.
    this.load.image("b_collection_es", "assets/images/spanish/buttons/b_collection_es.png");
    this.load.image("b_collection_over_es", "assets/images/spanish/buttons/b_collection_over_es.png");
    this.load.image("b_exit_es", "assets/images/spanish/buttons/b_exit_es.png");
    this.load.image("b_exit_over_es", "assets/images/spanish/buttons/b_exit_over_es.png");
    this.load.image("b_help_es", "assets/images/spanish/buttons/b_help_es.png");
    this.load.image("b_help_over_es", "assets/images/spanish/buttons/b_help_over_es.png");
    this.load.image("b_play_es", "assets/images/spanish/buttons/b_play_es.png");
    this.load.image("b_play_over_es", "assets/images/spanish/buttons/b_play_over_es.png");

    //text load.
    //undefined.
    this.load.image("count_fire_1", "assets/images/undefined/levels/count_fire_1.png");
    this.load.image("count_fire_2", "assets/images/undefined/levels/count_fire_2.png");
    this.load.image("count_fire_3", "assets/images/undefined/levels/count_fire_3.png");
    //english.
    this.load.image("cred_text_en", "assets/images/english/texts/cred_text_en.png");
    this.load.image("count_fire_en", "assets/images/english/texts/count_fire_en.png");
    //spanish.
    this.load.image("cred_text_es", "assets/images/spanish/texts/cred_text_es.png");
    this.load.image("count_fire_es", "assets/images/spanish/texts/count_fire_es.png");

    //players load.
    this.load.spritesheet("player_walk","assets/images/undefined/objects/player_walk.png",
      {
        frameHeight: 380,
        frameWidth: 350,
      }
    );
    this.load.spritesheet("player_shoot","assets/images/undefined/objects/player_shoot.png",
      {
        frameHeight: 380,
        frameWidth: 350,
      }
    );
    this.load.spritesheet("enemy_walk","assets/images/undefined/objects/enemy_walk.png",
      {
        frameHeight: 379,
        frameWidth: 350,
      }
    );
    this.load.spritesheet("enemy_shoot","assets/images/undefined/objects/enemy_shoot.png",
      {
        frameHeight: 380,
        frameWidth: 350,
      }
    );
    
    //levels load.
    this.load.image("count_background", "assets/images/undefined/levels/count_background.png");
    //level 1.
    this.load.image("level_1_sky", "assets/images/undefined/levels/level_1_sky.png");
    this.load.image("level_1_cloud_1", "assets/images/undefined/levels/level_1_cloud_1.png");
    this.load.image("level_1_cloud_2", "assets/images/undefined/levels/level_1_cloud_2.png");
    this.load.image("level_1_building", "assets/images/undefined/levels/level_1_building.png");
    this.load.image("level_1_mountains", "assets/images/undefined/levels/level_1_mountains.png");
  }
  create() {
    this.scene.start("language");
  }
}

export default preloader;
