<template>
  <div class="guide">
    <span class="title" id="title">引导页 🍓🍇🍈🍉</span>

    <el-alert class="alert" :closable="false"
              type="warning"
              title="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js.">
    </el-alert>

    <el-button type="primary" @click="handleClick">打开弹窗</el-button>
  </div>
</template>

<script lang="ts" setup name="guide">
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";



let handleClick = function() {
  console.log("handleClick");
  let driver = new Driver({
    animate: true,                    // Whether to animate or not
    opacity: 0.75,                    // Background opacity (0 means only popovers and without overlay)
    padding: 10,                      // Distance of element from around the edges
    allowClose: false,                 // Whether the click on overlay should close or not
    overlayClickNext: false,          // Whether the click on overlay should move next
    doneBtnText: 'Done',              // Text on the final button
    closeBtnText: 'Close',            // Text on the close button for this step
    stageBackground: '#ffffff',       // Background color for the staged behind highlighted element
    nextBtnText: 'Next',              // Next button text for this step
    prevBtnText: 'Previous',          // Previous button text for this step
    showButtons: true,               // Do not show control buttons in footer
    keyboardControl: true,            // Allow controlling through keyboard (escape to close, arrow keys to move)
    scrollIntoViewOptions: {},        // We use `scrollIntoView()` when possible, pass here the options for it if you want any
    onHighlightStarted: (Element) => {}, // Called when element is about to be highlighted
    onHighlighted: (Element) => {},      // Called when element is fully highlighted
    onDeselected: (Element) => {},       // Called when element has been deselected
    onReset: (Element) => {},            // Called when overlay is about to be cleared
    onNext: (Element) => {},                    // Called when moving to next step on any step
    onPrevious: (Element) => {},                // Called when moving to previous step on any step
  });
  driver.defineSteps([
    {
      element: "#toolbar-logo",
      popover:{
        position:"right",
        title:"这是toolbar logo",
        description:"这是toolbar description"
      }
    }
  ]);
  driver.start()
};
</script>

<style scoped lang="scss">
.guide {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  .el-button {
    font-size: 20px;
    margin: 20px;
    padding: 20px;
  }

  .title {
    background-color: firebrick;
    font-size: 40px;
  }

  .alert {
    background-color: aquamarine;
    margin: 52px 52px 52px 52px;
  }

}

</style>