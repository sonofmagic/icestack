<script setup lang="ts"></script>

<template>
  <div>
    <div class="my-6">
      <div class="tooltip" data-tip="hello"><button class="btn">Hover me</button></div>
    </div>

    <div class="my-6">
      <div class="tooltip tooltip-open" data-tip="hello">
        <button class="btn">Force open</button>
      </div>
    </div>

    <div class="my-6">
      <div class="tooltip tooltip-open tooltip-top" data-tip="hello">
        <button class="btn">Top</button>
      </div>
    </div>

    <div class="my-6">
      <div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
        <button class="btn">Bottom</button>
      </div>
    </div>

    <div class="my-6">
      <div class="tooltip tooltip-open tooltip-left" data-tip="hello">
        <button class="btn">Left</button>
      </div>
    </div>

    <div class="my-6">
      <div class="tooltip tooltip-open tooltip-right" data-tip="hello">
        <button class="btn">Right</button>
      </div>
    </div>

    <div class="my-6">
      <div data-tip="primary" class="tooltip tooltip-open tooltip-primary">
        <button class="btn btn-primary">primary</button>
      </div>
    </div>

    <div class="my-6">
      <div data-tip="secondary" class="tooltip tooltip-open tooltip-secondary">
        <button class="btn btn-secondary">secondary</button>
      </div>
    </div>

    <div class="my-6">
      <div data-tip="accent" class="tooltip tooltip-open tooltip-accent">
        <button class="btn btn-accent">accent</button>
      </div>
    </div>

    <div class="my-6">
      <div data-tip="info" class="tooltip tooltip-open tooltip-info">
        <button class="btn btn-info">info</button>
      </div>
    </div>

    <div class="my-6">
      <div data-tip="success" class="tooltip tooltip-open tooltip-success">
        <button class="btn btn-success">success</button>
      </div>
    </div>

    <div class="my-6">
      <div data-tip="warning" class="tooltip tooltip-open tooltip-warning">
        <button class="btn btn-warning">warning</button>
      </div>
    </div>

    <div class="my-6">
      <div data-tip="error" class="tooltip tooltip-open tooltip-error">
        <button class="btn btn-error">error</button>
      </div>
    </div>

    <div class="my-6">
      <div class="lg:tooltip" data-tip="hello"><button class="btn">Hover me</button></div>
    </div>
  </div>
</template>
