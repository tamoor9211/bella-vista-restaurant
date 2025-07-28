// Mobile testing page for responsive design verification
export function renderMobileTestPage() {
  return `
    <div class="pt-20 min-h-screen bg-gray-50">
      <!-- Test Header -->
      <div class="bg-blue-600 text-white py-8">
        <div class="container-custom">
          <h1 class="text-3xl md:text-4xl font-heading font-bold mb-4">
            📱 Mobile Responsiveness Test
          </h1>
          <p class="text-lg opacity-90">
            Testing responsive design across different screen sizes and devices
          </p>
        </div>
      </div>

      <!-- Device Info -->
      <div class="container-custom py-8">
        <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-heading font-semibold mb-4">Current Device Info</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="device-info">
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="font-semibold">Screen Size</div>
              <div id="screen-size" class="text-blue-600">Loading...</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="font-semibold">Viewport</div>
              <div id="viewport-size" class="text-blue-600">Loading...</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="font-semibold">Device Type</div>
              <div id="device-type" class="text-blue-600">Loading...</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="font-semibold">Touch Support</div>
              <div id="touch-support" class="text-blue-600">Loading...</div>
            </div>
          </div>
        </div>

        <!-- Breakpoint Tests -->
        <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-heading font-semibold mb-4">Breakpoint Tests</h2>
          <div class="space-y-4">
            <div class="p-4 border rounded-lg">
              <h3 class="font-semibold mb-2">Typography Scaling</h3>
              <div class="space-y-2">
                <div class="text-7xl font-heading">Hero Title</div>
                <div class="text-5xl font-heading">Section Title</div>
                <div class="text-3xl font-heading">Subsection</div>
                <div class="text-xl">Body Large</div>
                <div class="text-base">Body Regular</div>
                <div class="text-sm">Body Small</div>
              </div>
            </div>

            <div class="p-4 border rounded-lg">
              <h3 class="font-semibold mb-2">Button Tests</h3>
              <div class="flex flex-wrap gap-4">
                <button class="btn-primary">Primary Button</button>
                <button class="btn-secondary">Secondary Button</button>
                <button class="btn-primary" disabled>Disabled Button</button>
              </div>
            </div>

            <div class="p-4 border rounded-lg">
              <h3 class="font-semibold mb-2">Grid Layout Tests</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div class="card p-4 text-center">Grid Item 1</div>
                <div class="card p-4 text-center">Grid Item 2</div>
                <div class="card p-4 text-center">Grid Item 3</div>
                <div class="card p-4 text-center">Grid Item 4</div>
              </div>
            </div>

            <div class="p-4 border rounded-lg">
              <h3 class="font-semibold mb-2">Form Elements</h3>
              <form class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Text Input</label>
                  <input type="text" placeholder="Enter text" class="w-full px-3 py-2 border rounded-lg">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Select Dropdown</label>
                  <select class="w-full px-3 py-2 border rounded-lg">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Textarea</label>
                  <textarea rows="3" placeholder="Enter message" class="w-full px-3 py-2 border rounded-lg"></textarea>
                </div>
                <button type="submit" class="btn-primary">Submit Form</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Touch Target Tests -->
        <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-heading font-semibold mb-4">Touch Target Tests</h2>
          <div class="space-y-4">
            <div class="p-4 border rounded-lg">
              <h3 class="font-semibold mb-2">Minimum Touch Targets (44px)</h3>
              <div class="flex flex-wrap gap-2">
                <button class="bg-green-500 text-white px-3 py-2 rounded" style="min-height: 44px; min-width: 44px;">✓</button>
                <button class="bg-red-500 text-white px-2 py-1 rounded" style="height: 32px; width: 32px;">✗</button>
                <button class="bg-blue-500 text-white px-4 py-3 rounded">Good Size</button>
                <a href="#" class="bg-purple-500 text-white px-3 py-2 rounded inline-block" style="min-height: 44px;">Link</a>
              </div>
            </div>

            <div class="p-4 border rounded-lg">
              <h3 class="font-semibold mb-2">Interactive Elements</h3>
              <div class="space-y-2">
                <div class="card p-4 cursor-pointer hover:bg-gray-50">Clickable Card</div>
                <div class="flex items-center space-x-4">
                  <input type="checkbox" id="test-checkbox" class="w-5 h-5">
                  <label for="test-checkbox">Checkbox with label</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input type="radio" id="test-radio" name="test" class="w-5 h-5">
                  <label for="test-radio">Radio button with label</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Performance Tests -->
        <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-heading font-semibold mb-4">Performance Metrics</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="performance-metrics">
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="font-semibold">Page Load</div>
              <div id="load-time" class="text-blue-600">Calculating...</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="font-semibold">DOM Ready</div>
              <div id="dom-ready" class="text-blue-600">Calculating...</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="font-semibold">First Paint</div>
              <div id="first-paint" class="text-blue-600">Calculating...</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="font-semibold">Connection</div>
              <div id="connection-type" class="text-blue-600">Detecting...</div>
            </div>
          </div>
        </div>

        <!-- Accessibility Tests -->
        <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 class="text-2xl font-heading font-semibold mb-4">Accessibility Tests</h2>
          <div class="space-y-4">
            <div class="p-4 border rounded-lg">
              <h3 class="font-semibold mb-2">Color Contrast</h3>
              <div class="space-y-2">
                <div class="p-2 bg-gray-100 text-gray-900">Good contrast (AAA)</div>
                <div class="p-2 bg-gray-300 text-gray-600">Moderate contrast (AA)</div>
                <div class="p-2 bg-yellow-100 text-yellow-800">Warning colors</div>
                <div class="p-2 bg-red-100 text-red-800">Error colors</div>
              </div>
            </div>

            <div class="p-4 border rounded-lg">
              <h3 class="font-semibold mb-2">Focus States</h3>
              <div class="space-y-2">
                <button class="btn-primary focus:ring-4 focus:ring-blue-300">Focusable Button</button>
                <input type="text" placeholder="Focusable input" class="px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500">
                <a href="#" class="text-blue-600 underline focus:ring-2 focus:ring-blue-500 rounded">Focusable Link</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Test Results -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-2xl font-heading font-semibold mb-4">Test Results</h2>
          <div id="test-results" class="space-y-2">
            <!-- Results will be populated by JavaScript -->
          </div>
          <button onclick="runMobileTests()" class="btn-primary mt-4">
            Run All Tests
          </button>
        </div>
      </div>
    </div>
  `
}
