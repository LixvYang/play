
// show led  block = "led"
namespace led {

  
  // FIXME:Press A 
  // show Target icon
  // and then play music
  // end show Scissors icon
  export function PressA() {
    
      basic.showIcon(IconNames.Target)
      music.playMelody("C5 B A G F E D C ", 120)
      basic.showIcon(IconNames.Scissors)
    
  }

  // FIXME: Press B 
  // Stop all sounds
  export function PressB() {
      music.stopAllSounds()
  }

  // FIXME: Press A and B
  //  Show icons YES icon
  export function PressAB() {
      basic.showIcon(IconNames.Yes)
  }
}