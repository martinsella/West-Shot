class preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    //menus load.
    this.load.image("main", "assets/images/undefined/menus/main.png");
    this.load.image("title", "assets/images/undefined/menus/title.png");
    this.load.image("language", "assets/images/undefined/menus/language.png");
    this.load.image("credits", "assets/images/undefined/menus/credits.png");

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
    //english.
    this.load.image("cred_text_en", "assets/images/english/texts/cred_text_en.png");
    //spanish.
    this.load.image("cred_text_es", "assets/images/spanish/texts/cred_text_es.png");

    //players load.
    this.load.spritesheet("player","assets/images/undefined/objects/player.png",
      {
        frameHeight: 800,
        frameWidth: 500,
      }
    );
    this.load.spritesheet("enemy","assets/images/undefined/objects/enemy.png",
      {
        frameHeight: 800,
        frameWidth: 500,
      }
    );

    //levels load.
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
